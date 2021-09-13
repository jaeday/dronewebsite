# Travelling Salesperson Problem

The routing system for our drone delivery system can be considered a practical application of the travelling salesperson problem, wherein the drone must complete a series of deliveries in a Hamiltonian circuit while minimizing the overall length of the tour.

As one of the most famous NP-hard problems in computer science, there exist many heurtisics to approximate the length and path taken of a optimal tour. However, given that we anticipate a relatively small number of points (<10 per trip), we opted to solve the problem optimally for each tour. 

The input for this routing system is given by a set of integer coordinates based on the relative coordinate system of the university (i.e. we would define the Diag to be the origin (0,0) and perform all further calculations relative to this origin.)

A sample input file with 4 points is shown below:

```
4
- 3 2
2 4
1 2
0 3
```

In the future, we hope to be able to extend this system to utilize GPS coordinates for both the input coordinates and the coordinates of the "no-fly zones" discussed below.

In order to do this, we utilized the random insertion heuristic. The heuristic begins by inserting both the starting point and the closest point to the starting point into the path. Then, a point k is chosen arbitrarily (in our implementation, we simply used the order that the points were read in) and an insertion point is found in the existing path that results in the smallest increase in the total length of the tour.

Because of the extensive number of times we would have to calculate the distance between points (especially when we considered paths that transitted "no-fly zones"), we opted to precalculate all of the distances between the points as well as any routing required to get around these "no-fly zones" and store them in a distance matrix.

The C++ code snippet that implements this functionality is shown below:

```C++
// Attempts to find the solution to the given TSP using the random
// insertion heuristic
void fastTSP() {

  path.reserve(numPoints);
  int numVisited = 0; // also serves as the index of points in coords

  coords[0].visited = true;

  int toAdd = findClosestPoint(0);
  coords[toAdd].visited = true;
  path.push_back(0);
  path.push_back(toAdd);

  while(numVisited < static_cast<int>(numPoints)) {

    toAdd = numVisited++;

    if(coords[toAdd].visited) {
      continue;
    }

    int insertIdx = findMinInsertionIdx(toAdd);
    path.insert(begin(path) + insertIdx, toAdd);
    coords[toAdd].visited = true;

  } // while

  calcTotalDist();

} // fastTSP()
```

Once we had created a path using the random insertion heurisitc, we generated all possible permutations of the tour by swapping the pairs of points in the tour using the path created by the random insertion heuristic as an upper bound for the tour distance. To bound away many unfeasible paths, we also made use of a "promising" function that would avoid permuting any paths that were guaranteed to be longer than the path the heuristic had already created.

```C++
// returns true if inserting a point is promising
// i.e. is (sDist + eDist + distSoFar + mstDist < optDist)
bool promising(const size_t permLength) {

  // Creating an MST of all points after perm_length
  mst(permLength);

  // Finding the points in the MST that are closest to the start and end points
  // of the optimal path found so far
  double sDist = std::numeric_limits<double>::infinity();
  double eDist = std::numeric_limits<double>::infinity();

  for(size_t i = permLength; i < path.size(); ++i) {

    double dist1 = distmat[path.front()][path[i]].second;
    double dist2 = distmat[path[i]][path.back()].second;

    if(dist1 < sDist) {
      sDist = dist1;
    }
    if(dist2 < eDist) {
      eDist = dist2;
    }

  } // for i

  return (sDist + eDist + distSoFar + mstDist < optDist);

} // promising()
```

```c++
void genPerms(size_t permLength) {

  if(permLength == path.size()) {

    double lastLink = distmat[path.front()][path.back()].second;

    if(distSoFar + lastLink < optDist) {
      optPath = path;
      optDist = distSoFar + lastLink;
    }

  } // if

  if(!promising(permLength)) {
    return;
  }

  for(size_t i = permLength; i < path.size(); ++i) {

    std::swap(path[permLength], path[i]);
    // Generating permutations with the last distance added
    distSoFar += distmat[path[permLength - 1]][path[permLength]].second;
    genPerms(permLength + 1);
    // Removing the last distance
    distSoFar -= distmat[path[permLength - 1]][path[permLength]].second;
    std::swap(path[permLength], path[i]);

  } // for i

} // genPerms()
```

While this still carries a very high time complexity, we decided that, given the relatively small number of inputs and the fact that this part of the codebase would be implemented in C++, that this cost was acceptable.

# Collision Detection

Though we were designing the program to pilot a drone, which would free it of the constraints placed on road-based autonomous vehicles, we determined that a form of collision detection was necessary.  In particular, due to the heights of buildings in many downtown areas (where we anticipate our service would recieve the most use) and FAA and other regulations restricting the use of drones in certain areas (airports, military bases, power lines, etc.) - so-called "no-fly zones."

We opted to use a static model for these so-called "no-fly zones" because we anticipate that our drone could fly high enough to avoid most mobile obstacles, such as people and road vehicles. To implement this, we decided to produce input files containing sets of 4 coordinates that defined these "no-fly zones".

A sample input file with 1 "no-fly zone" is shown below:

```
1
-1 -1
-1 1
1 1
1 -1
```

The input file above describes the presence of a single rectangular "no-fly zone" with corner coordinates (-1, -1), (-1, 1), (1, 1), (1, -1).

While we did consider the use of algorithms that avoid obstacles on-the-fly such as D*Lite, we ultimately decided that it would be less computationally demanding if the drone were to fly at an altitude high enough to avoid mobile obstacles and use a static map of "no-fly zones" provided at runtime to avoid tall buildings and otherwise restricted airspace. 

Although the use of non-rectangular zones was considered to potentially minimize the distance that the drone would have fly, it was decided that the use of rectangular zones was both computationally easier (as the collision algorithm used works only with rectangles) and the use of more generalized shapes would create a buffer for real world factors such as wind that could push a drone into a "no-fly zone"

To route around these "no-fly zones", we used the Cohen-Sutherland Algorithm. Initially developed in 1967 for use in a flight simulator, the algorithm uses special numbers called outcodes and bitwise functions to determine whether a line passes through a "viewport"

The implementation of this algorithm from Wikipedia is shown below:

```c++
typedef int OutCode;

const int INSIDE = 0; // 0000
const int LEFT = 1;   // 0001
const int RIGHT = 2;  // 0010
const int BOTTOM = 4; // 0100
const int TOP = 8;    // 1000

// Compute the bit code for a point (x, y) using the clip
// bounded diagonally by (xmin, ymin), and (xmax, ymax)

// ASSUME THAT xmax, xmin, ymax and ymin are global constants.

OutCode ComputeOutCode(double x, double y)
{
	OutCode code;

	code = INSIDE;          // initialised as being inside of [[clip window]]

	if (x < xmin)           // to the left of clip window
		code |= LEFT;
	else if (x > xmax)      // to the right of clip window
		code |= RIGHT;
	if (y < ymin)           // below the clip window
		code |= BOTTOM;
	else if (y > ymax)      // above the clip window
		code |= TOP;

	return code;
}

// Cohen–Sutherland clipping algorithm clips a line from
// P0 = (x0, y0) to P1 = (x1, y1) against a rectangle with 
// diagonal from (xmin, ymin) to (xmax, ymax).
void CohenSutherlandLineClipAndDraw(double x0, double y0, double x1, double y1)
{
	// compute outcodes for P0, P1, and whatever point lies outside the clip rectangle
	OutCode outcode0 = ComputeOutCode(x0, y0);
	OutCode outcode1 = ComputeOutCode(x1, y1);
	bool accept = false;

	while (true) {
		if (!(outcode0 | outcode1)) {
			// bitwise OR is 0: both points inside window; trivially accept and exit loop
			accept = true;
			break;
		} else if (outcode0 & outcode1) {
			// bitwise AND is not 0: both points share an outside zone (LEFT, RIGHT, TOP,
			// or BOTTOM), so both must be outside window; exit loop (accept is false)
			break;
		} else {
			// failed both tests, so calculate the line segment to clip
			// from an outside point to an intersection with clip edge
			double x, y;

			// At least one endpoint is outside the clip rectangle; pick it.
			OutCode outcodeOut = outcode1 > outcode0 ? outcode1 : outcode0;

			// Now find the intersection point;
			// use formulas:
			//   slope = (y1 - y0) / (x1 - x0)
			//   x = x0 + (1 / slope) * (ym - y0), where ym is ymin or ymax
			//   y = y0 + slope * (xm - x0), where xm is xmin or xmax
			// No need to worry about divide-by-zero because, in each case, the
			// outcode bit being tested guarantees the denominator is non-zero
			if (outcodeOut & TOP) {           // point is above the clip window
				x = x0 + (x1 - x0) * (ymax - y0) / (y1 - y0);
				y = ymax;
			} else if (outcodeOut & BOTTOM) { // point is below the clip window
				x = x0 + (x1 - x0) * (ymin - y0) / (y1 - y0);
				y = ymin;
			} else if (outcodeOut & RIGHT) {  // point is to the right of clip window
				y = y0 + (y1 - y0) * (xmax - x0) / (x1 - x0);
				x = xmax;
			} else if (outcodeOut & LEFT) {   // point is to the left of clip window
				y = y0 + (y1 - y0) * (xmin - x0) / (x1 - x0);
				x = xmin;
			}

			// Now we move outside point to intersection point to clip
			// and get ready for next pass.
			if (outcodeOut == outcode0) {
				x0 = x;
				y0 = y;
				outcode0 = ComputeOutCode(x0, y0);
			} else {
				x1 = x;
				y1 = y;
				outcode1 = ComputeOutCode(x1, y1);
			}
		}
	}
}
```

We have opted to omit our implementation of the algorithm from this report due to its complexity and extensive handling of edge cases. Please refer to our Github repository for our version of the algorithm.

In our implementation, we considered the "viewport" to be a "no-fly zone" and thus any line connecting two points that crossed a "no-fly zone" would have to have the distance around the edge of the "no-fly zone" added to the distance stored in the distance matrix before being considered by the random insertion heuristic. Furthermore, the path taken along the edge of the :"no-fly zones" to avoid the points is also stored in the distance matrix to reduce the number of calculations that would have to be repeated. Due to the small number of points and the extensive number of times these distances and paths would be referened, we decided that this was an acceptable tradeoff between time and space.

