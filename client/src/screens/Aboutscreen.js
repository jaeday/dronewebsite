import React, { useState, useEffect } from 'react';
import dronepic from "../images/about1.jpeg"
import dronepic2 from "../images/about2.jpg"
import SyntaxHighLighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Aboutscreen() {
    AOS.init({})
    return (
        <div style={{ alignContent: 'left' , margin: 'auto'}}>
            <div className="container-about" data-aos='fade-down' style={{ width: '70%', paddingBottom: '20px', align: 'center' }}>
                <h3 >About us</h3>


                <img src={dronepic} alt="drone" className="img-fluid" />
                <h1 align="left" style={{ paddingTop: '20px' }}> Getting up and getting coffee is such a huge commitment a college student has to make every morning. So we thought,
                    Why not have a small drone deliver the coffee for every college student in the morning? So, we decided to make an end-to-end
                    fully automated drone delivery system for students wanting coffee on campus. </h1>
            </div>

            <div className="container-about" data-aos='fade-down' style={{ width: '70%', paddingBottom: '20px', align: 'center' }}>
                <h2 >Programming the drone</h2>



                <h1 align="left" style={{ paddingTop: '20px' }}> The routing system for our drone delivery system can be considered a practical application of the travelling salesperson problem, wherein the drone must complete a series of deliveries in a Hamiltonian circuit while minimizing the overall length of the tour. </h1>
                <h1 align="left" style={{ paddingTop: '20px' }}> As one of the most famous NP-hard problems in computer science, there exist many heurtisics to approximate the length and path taken of a optimal tour. However, given that we anticipate a relatively small number of points (less than 10 per trip), we opted to solve the problem optimally for each tour.  </h1>
                <h1 align="left" style={{ paddingTop: '20px' }}> The input for this routing system is given by a set of integer coordinates based on the relative coordinate system of the university (i.e. we would define the Diag to be the origin (0,0) and perform all further calculations relative to this origin.)</h1>
                <SyntaxHighLighter language="javascript" style={dracula} align="left">
                    {
                        "4 \n - 3 2 \n 2 4 \n 1 2 \n 0 3"
                    }
                </SyntaxHighLighter>
                <h1 align="left" style={{ paddingTop: '20px' }}> In the future, we hope to be able to extend this system to utilize GPS coordinates for both the input coordinates and the coordinates of the "no-fly zones" discussed below.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}> In order to do this, we utilized the random insertion heuristic. The heuristic begins by inserting both the starting point and the closest point to the starting point into the path. Then, a point k is chosen arbitrarily (in our implementation, we simply used the order that the points were read in) and an insertion point is found in the existing path that results in the smallest increase in the total length of the tour.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>Because of the extensive number of times we would have to calculate the distance between points (especially when we considered paths that transitted "no-fly zones"), we opted to precalculate all of the distances between the points as well as any routing required to get around these "no-fly zones" and store them in a distance matrix.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>The C++ code snippet that implements this functionality is shown below:</h1>
                <div
                    style={{
                        background: "#ffffff",
                        overflow: "auto",
                        width: "auto",
                        border: "solid gray",
                        borderWidth: ".1em .1em .1em .8em",
                        padding: ".2em .6em",
                        textAlign: 'left'
                    }}
                >
                    <pre style={{ margin: 0, lineHeight: "125%" }}>
                        <span style={{ color: "#888888" }}>
      // Attempts to find the solution to the given TSP using the random
                        </span>
                        {"\n"}
                        <span style={{ color: "#888888" }}>// insertion heuristic</span>
                        {"\n"}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>void</span>{" "}
                        <span style={{ color: "#0066BB", fontWeight: "bold" }}>fastTSP</span>(){" "}
                        {"{"}
                        {"\n"}
                        {"\n"}
                        {"  "}path.reserve(numPoints);{"\n"}
                        {"  "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>
                            int
                        </span> numVisited <span style={{ color: "#333333" }}>=</span>{" "}
                        <span style={{ color: "#0000DD", fontWeight: "bold" }}>0</span>;{" "}
                        <span style={{ color: "#888888" }}>
      // also serves as the index of points in coords
                        </span>
                        {"\n"}
                        {"\n"}
                        {"  "}coords[<span style={{ color: "#0000DD", fontWeight: "bold" }}>0</span>
                        ].visited <span style={{ color: "#333333" }}>=</span>{" "}
                        <span style={{ color: "#007020" }}>true</span>;{"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>int</span> toAdd{" "}
                        <span style={{ color: "#333333" }}>=</span> findClosestPoint(
                        <span style={{ color: "#0000DD", fontWeight: "bold" }}>0</span>);{"\n"}
                        {"  "}coords[toAdd].visited <span style={{ color: "#333333" }}>=</span>{" "}
                        <span style={{ color: "#007020" }}>true</span>;{"\n"}
                        {"  "}path.push_back(
                        <span style={{ color: "#0000DD", fontWeight: "bold" }}>0</span>);{"\n"}
                        {"  "}path.push_back(toAdd);{"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>while</span>
                        (numVisited <span style={{ color: "#333333" }}>&lt;</span>{" "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>static_cast</span>
                        <span style={{ color: "#333333" }}>&lt;</span>
                        <span style={{ color: "#333399", fontWeight: "bold" }}>int</span>
                        <span style={{ color: "#333333" }}>&gt;</span>(numPoints)) {"{"}
                        {"\n"}
                        {"\n"}
                        {"    "}toAdd <span style={{ color: "#333333" }}>=</span> numVisited
                        <span style={{ color: "#333333" }}>++</span>;{"\n"}
                        {"\n"}
                        {"    "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>
                        (coords[toAdd].visited) {"{"}
                        {"\n"}
                        {"      "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>continue</span>;
                        {"\n"}
                        {"    "}
                        {"}"}
                        {"\n"}
                        {"\n"}
                        {"    "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>
                            int
                        </span> insertIdx <span style={{ color: "#333333" }}>=</span>{" "}
                        findMinInsertionIdx(toAdd);{"\n"}
                        {"    "}path.insert(begin(path) <span style={{ color: "#333333" }}>+</span>{" "}
                        insertIdx, toAdd);{"\n"}
                        {"    "}coords[toAdd].visited <span style={{ color: "#333333" }}>=</span>{" "}
                        <span style={{ color: "#007020" }}>true</span>;{"\n"}
                        {"\n"}
                        {"  "}
                        {"}"} <span style={{ color: "#888888" }}>// while</span>
                        {"\n"}
                        {"\n"}
                        {"  "}calcTotalDist();{"\n"}
                        {"\n"}
                        {"}"} <span style={{ color: "#888888" }}>// fastTSP()</span>
                        {"\n"}
                    </pre>
                </div>

                <h1 align="left" style={{ paddingTop: '20px' }}>Once we had created a path using the random insertion heurisitc, we generated all possible permutations of the tour by swapping the pairs of points in the tour using the path created by the random insertion heuristic as an upper bound for the tour distance. To bound away many unfeasible paths, we also made use of a "promising" function that would avoid permuting any paths that were guaranteed to be longer than the path the heuristic had already created.</h1>
                ;<div
                    style={{
                        background: "#ffffff",
                        overflow: "auto",
                        width: "auto",
                        border: "solid gray",
                        borderWidth: ".1em .1em .1em .8em",
                        padding: ".2em .6em",
                        textAlign: 'left'
                    }}
                >
                    <pre style={{ margin: 0, lineHeight: "125%" }}>
                        <span style={{ color: "#888888" }}>
      // returns true if inserting a point is promising
                        </span>
                        {"\n"}
                        <span style={{ color: "#888888" }}>
      // i.e. is (sDist + eDist + distSoFar + mstDist &lt; optDist)
                        </span>
                        {"\n"}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>bool</span>{" "}
                        <span style={{ color: "#0066BB", fontWeight: "bold" }}>promising</span>(
                        <span style={{ color: "#008800", fontWeight: "bold" }}>const</span>{" "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>size_t</span>{" "}
                        permLength) {"{"}
                        {"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#888888" }}>
      // Creating an MST of all points after perm_length
                        </span>
                        {"\n"}
                        {"  "}mst(permLength);{"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#888888" }}>
      // Finding the points in the MST that are closest to the start and end
                            points
                        </span>
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#888888" }}>
      // of the optimal path found so far
                        </span>
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>
                            double
                        </span> sDist <span style={{ color: "#333333" }}>=</span> std
                        <span style={{ color: "#333333" }}>::</span>numeric_limits
                        <span style={{ color: "#333333" }}>&lt;</span>
                        <span style={{ color: "#333399", fontWeight: "bold" }}>double</span>
                        <span style={{ color: "#333333" }}>&gt;::</span>infinity();{"\n"}
                        {"  "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>
                            double
                        </span> eDist <span style={{ color: "#333333" }}>=</span> std
                        <span style={{ color: "#333333" }}>::</span>numeric_limits
                        <span style={{ color: "#333333" }}>&lt;</span>
                        <span style={{ color: "#333399", fontWeight: "bold" }}>double</span>
                        <span style={{ color: "#333333" }}>&gt;::</span>infinity();{"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>for</span>(
                        <span style={{ color: "#333399", fontWeight: "bold" }}>size_t</span> i{" "}
                        <span style={{ color: "#333333" }}>=</span> permLength; i{" "}
                        <span style={{ color: "#333333" }}>&lt;</span> path.size();{" "}
                        <span style={{ color: "#333333" }}>++</span>i) {"{"}
                        {"\n"}
                        {"\n"}
                        {"    "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>
                            double
                        </span> dist1 <span style={{ color: "#333333" }}>=</span>{" "}
                        distmat[path.front()][path[i]].second;{"\n"}
                        {"    "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>
                            double
                        </span> dist2 <span style={{ color: "#333333" }}>=</span>{" "}
                        distmat[path[i]][path.back()].second;{"\n"}
                        {"\n"}
                        {"    "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>(dist1{" "}
                        <span style={{ color: "#333333" }}>&lt;</span> sDist) {"{"}
                        {"\n"}
                        {"      "}sDist <span style={{ color: "#333333" }}>=</span> dist1;{"\n"}
                        {"    "}
                        {"}"}
                        {"\n"}
                        {"    "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>(dist2{" "}
                        <span style={{ color: "#333333" }}>&lt;</span> eDist) {"{"}
                        {"\n"}
                        {"      "}eDist <span style={{ color: "#333333" }}>=</span> dist2;{"\n"}
                        {"    "}
                        {"}"}
                        {"\n"}
                        {"\n"}
                        {"  "}
                        {"}"} <span style={{ color: "#888888" }}>// for i</span>
                        {"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>
                            return
                        </span> (sDist <span style={{ color: "#333333" }}>+</span> eDist{" "}
                        <span style={{ color: "#333333" }}>+</span> distSoFar{" "}
                        <span style={{ color: "#333333" }}>+</span> mstDist{" "}
                        <span style={{ color: "#333333" }}>&lt;</span> optDist);{"\n"}
                        {"\n"}
                        {"}"} <span style={{ color: "#888888" }}>// promising()</span>
                        {"\n"}
                    </pre>
                </div>
                ;<div
                    style={{
                        background: "#ffffff",
                        overflow: "auto",
                        width: "auto",
                        border: "solid gray",
                        borderWidth: ".1em .1em .1em .8em",
                        padding: ".2em .6em",
                        textAlign: 'left'
                    }}
                >
                    <pre style={{ margin: 0, lineHeight: "125%" }}>
                        <span style={{ color: "#333399", fontWeight: "bold" }}>void</span>{" "}
                        <span style={{ color: "#0066BB", fontWeight: "bold" }}>genPerms</span>(
                        <span style={{ color: "#333399", fontWeight: "bold" }}>size_t</span>{" "}
                        permLength) {"{"}
                        {"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>
                            if
                        </span>(permLength <span style={{ color: "#333333" }}>==</span> path.size()){" "}
                        {"{"}
                        {"\n"}
                        {"\n"}
                        {"    "}
                        <span style={{ color: "#333399", fontWeight: "bold" }}>double</span>{" "}
                        lastLink <span style={{ color: "#333333" }}>=</span>{" "}
                        distmat[path.front()][path.back()].second;{"\n"}
                        {"\n"}
                        {"    "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>
                            if
                        </span>(distSoFar <span style={{ color: "#333333" }}>+</span> lastLink{" "}
                        <span style={{ color: "#333333" }}>&lt;</span> optDist) {"{"}
                        {"\n"}
                        {"      "}optPath <span style={{ color: "#333333" }}>=</span> path;{"\n"}
                        {"      "}optDist <span style={{ color: "#333333" }}>=</span> distSoFar{" "}
                        <span style={{ color: "#333333" }}>+</span> lastLink;{"\n"}
                        {"    "}
                        {"}"}
                        {"\n"}
                        {"\n"}
                        {"  "}
                        {"}"} <span style={{ color: "#888888" }}>// if</span>
                        {"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>(
                        <span style={{ color: "#333333" }}>!</span>promising(permLength)) {"{"}
                        {"\n"}
                        {"    "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>return</span>;{"\n"}
                        {"  "}
                        {"}"}
                        {"\n"}
                        {"\n"}
                        {"  "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>for</span>(
                        <span style={{ color: "#333399", fontWeight: "bold" }}>size_t</span> i{" "}
                        <span style={{ color: "#333333" }}>=</span> permLength; i{" "}
                        <span style={{ color: "#333333" }}>&lt;</span> path.size();{" "}
                        <span style={{ color: "#333333" }}>++</span>i) {"{"}
                        {"\n"}
                        {"\n"}
                        {"    "}std<span style={{ color: "#333333" }}>::</span>
                        swap(path[permLength], path[i]);{"\n"}
                        {"    "}
                        <span style={{ color: "#888888" }}>
      // Generating permutations with the last distance added
                        </span>
                        {"\n"}
                        {"    "}distSoFar <span style={{ color: "#333333" }}>+=</span>{" "}
                        distmat[path[permLength <span style={{ color: "#333333" }}>-</span>{" "}
                        <span style={{ color: "#0000DD", fontWeight: "bold" }}>1</span>
                        ]][path[permLength]].second;{"\n"}
                        {"    "}genPerms(permLength <span style={{ color: "#333333" }}>+</span>{" "}
                        <span style={{ color: "#0000DD", fontWeight: "bold" }}>1</span>);{"\n"}
                        {"    "}
                        <span style={{ color: "#888888" }}>// Removing the last distance</span>
                        {"\n"}
                        {"    "}distSoFar <span style={{ color: "#333333" }}>-=</span>{" "}
                        distmat[path[permLength <span style={{ color: "#333333" }}>-</span>{" "}
                        <span style={{ color: "#0000DD", fontWeight: "bold" }}>1</span>
                        ]][path[permLength]].second;{"\n"}
                        {"    "}std<span style={{ color: "#333333" }}>::</span>
                        swap(path[permLength], path[i]);{"\n"}
                        {"\n"}
                        {"  "}
                        {"}"} <span style={{ color: "#888888" }}>// for i</span>
                        {"\n"}
                        {"\n"}
                        {"}"} <span style={{ color: "#888888" }}>// genPerms()</span>
                        {"\n"}
                    </pre>
                </div>
                <h1 align="left" style={{ paddingTop: '20px' }}>While this still carries a very high time complexity, we decided that, given the relatively small number of inputs and the fact that this part of the codebase would be implemented in C++, that this cost was acceptable.</h1>

                <h1 align="left" style={{ paddingTop: '20px' }}> We have opted to omit our implementation of the algorithm from this report due to its complexity and extensive handling of edge cases. Please refer to our Github repository for our version of the algorithm. </h1>
                <h1 align="left" style={{ paddingTop: '20px' }}> In our implementation, we considered the "viewport" to be a "no-fly zone" and thus any line connecting two points that crossed a "no-fly zone" would have to have the distance around the edge of the "no-fly zone" added to the distance stored in the distance matrix before being considered by the random insertion heuristic. Furthermore, the path taken along the edge of the :"no-fly zones" to avoid the points is also stored in the distance matrix to reduce the number of calculations that would have to be repeated. Due to the small number of points and the extensive number of times these distances and paths would be referened, we decided that this was an acceptable tradeoff between time and space.</h1>

            </div>
            <div className="container-about" data-aos='fade-down' style={{ width: '70%', paddingTop: '20px', paddingBottom: '20px', align: 'center' }}>
                <h2 >Collision Detection</h2>
                <h1 align="left" style={{ paddingTop: '20px' }}>Though we were designing the program to pilot a drone, which would free it of the constraints placed on road-based autonomous vehicles, we determined that a form of collision detection was necessary.  In particular, due to the heights of buildings in many downtown areas (where we anticipate our service would recieve the most use) and FAA and other regulations restricting the use of drones in certain areas (airports, military bases, power lines, etc.) - so-called "no-fly zones."</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>We opted to use a static model for these so-called "no-fly zones" because we anticipate that our drone could fly high enough to avoid most mobile obstacles, such as people and road vehicles. To implement this, we decided to produce input files containing sets of 4 coordinates that defined these "no-fly zones".</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>A sample input file with 1 "no-fly zone" is shown below:</h1>
                <SyntaxHighLighter language="javascript" style={dracula} align="left">
                    {
                        "1 \n -1 -1 \n -1 1 \n 1 1 \n 1 -1"
                    }
                </SyntaxHighLighter>
                <h1 align="left" style={{ paddingTop: '20px' }}>The input file above describes the presence of a single rectangular "no-fly zone" with corner coordinates (-1, -1), (-1, 1), (1, 1), (1, -1).</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>While we did consider the use of algorithms that avoid obstacles on-the-fly such as D*Lite, we ultimately decided that it would be less computationally demanding if the drone were to fly at an altitude high enough to avoid mobile obstacles and use a static map of "no-fly zones" provided at runtime to avoid tall buildings and otherwise restricted airspace. </h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>Although the use of non-rectangular zones was considered to potentially minimize the distance that the drone would have fly, it was decided that the use of rectangular zones was both computationally easier (as the collision algorithm used works only with rectangles) and the use of more generalized shapes would create a buffer for real world factors such as wind that could push a drone into a "no-fly zone" </h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>To route around these "no-fly zones", we used the Cohen-Sutherland Algorithm. Initially developed in 1967 for use in a flight simulator, the algorithm uses special numbers called outcodes and bitwise functions to determine whether a line passes through a "viewport"</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>The implementation of this algorithm from Wikipedia is shown below: </h1>
                ;<>
                    {/* HTML generated using hilite.me */}
                    <div
                        style={{
                            background: "#ffffff",
                            overflow: "auto",
                            width: "auto",
                            border: "solid gray",
                            borderWidth: ".1em .1em .1em .8em",
                            padding: ".2em .6em",
                            textAlign: 'left'
                        }}
                    >
                        <pre style={{ margin: 0, lineHeight: "125%" }}>
                            <span style={{ color: "#008800", fontWeight: "bold" }}>typedef</span>{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>int</span> OutCode;
                            {"\n"}
                            {"\n"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>const</span>{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>int</span> INSIDE{" "}
                            <span style={{ color: "#333333" }}>=</span>{" "}
                            <span style={{ color: "#0000DD", fontWeight: "bold" }}>0</span>;{" "}
                            <span style={{ color: "#888888" }}>// 0000</span>
                            {"\n"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>const</span>{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>int</span> LEFT{" "}
                            <span style={{ color: "#333333" }}>=</span>{" "}
                            <span style={{ color: "#0000DD", fontWeight: "bold" }}>1</span>;{"   "}
                            <span style={{ color: "#888888" }}>// 0001</span>
                            {"\n"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>const</span>{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>int</span> RIGHT{" "}
                            <span style={{ color: "#333333" }}>=</span>{" "}
                            <span style={{ color: "#0000DD", fontWeight: "bold" }}>2</span>;{"  "}
                            <span style={{ color: "#888888" }}>// 0010</span>
                            {"\n"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>const</span>{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>int</span> BOTTOM{" "}
                            <span style={{ color: "#333333" }}>=</span>{" "}
                            <span style={{ color: "#0000DD", fontWeight: "bold" }}>4</span>;{" "}
                            <span style={{ color: "#888888" }}>// 0100</span>
                            {"\n"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>const</span>{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>int</span> TOP{" "}
                            <span style={{ color: "#333333" }}>=</span>{" "}
                            <span style={{ color: "#0000DD", fontWeight: "bold" }}>8</span>;{"    "}
                            <span style={{ color: "#888888" }}>// 1000</span>
                            {"\n"}
                            {"\n"}
                            <span style={{ color: "#888888" }}>
        // Compute the bit code for a point (x, y) using the clip
                            </span>
                            {"\n"}
                            <span style={{ color: "#888888" }}>
        // bounded diagonally by (xmin, ymin), and (xmax, ymax)
                            </span>
                            {"\n"}
                            {"\n"}
                            <span style={{ color: "#888888" }}>
        // ASSUME THAT xmax, xmin, ymax and ymin are global constants.
                            </span>
                            {"\n"}
                            {"\n"}OutCode{" "}
                            <span style={{ color: "#0066BB", fontWeight: "bold" }}>
                                ComputeOutCode
                            </span>
                            (<span style={{ color: "#333399", fontWeight: "bold" }}>double</span> x,{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>double</span> y)
                            {"\n"}
                            {"{"}
                            {"\n"}
                            {"\t"}OutCode code;{"\n"}
                            {"\n"}
                            {"\t"}code <span style={{ color: "#333333" }}>=</span> INSIDE;
                            {"          "}
                            <span style={{ color: "#888888" }}>
        // initialised as being inside of [[clip window]]
                            </span>
                            {"\n"}
                            {"\n"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span> (x{" "}
                            <span style={{ color: "#333333" }}>&lt;</span> xmin){"           "}
                            <span style={{ color: "#888888" }}>// to the left of clip window</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}code <span style={{ color: "#333333" }}>|=</span> LEFT;{"\n"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>else</span>{" "}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span> (x{" "}
                            <span style={{ color: "#333333" }}>&gt;</span> xmax){"      "}
                            <span style={{ color: "#888888" }}>// to the right of clip window</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}code <span style={{ color: "#333333" }}>|=</span> RIGHT;{"\n"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span> (y{" "}
                            <span style={{ color: "#333333" }}>&lt;</span> ymin){"           "}
                            <span style={{ color: "#888888" }}>// below the clip window</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}code <span style={{ color: "#333333" }}>|=</span> BOTTOM;{"\n"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>else</span>{" "}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span> (y{" "}
                            <span style={{ color: "#333333" }}>&gt;</span> ymax){"      "}
                            <span style={{ color: "#888888" }}>// above the clip window</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}code <span style={{ color: "#333333" }}>|=</span> TOP;{"\n"}
                            {"\n"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>return</span> code;
                            {"\n"}
                            {"}"}
                            {"\n"}
                            {"\n"}
                            <span style={{ color: "#888888" }}>
        // Cohen–Sutherland clipping algorithm clips a line from
                            </span>
                            {"\n"}
                            <span style={{ color: "#888888" }}>
        // P0 = (x0, y0) to P1 = (x1, y1) against a rectangle with{" "}
                            </span>
                            {"\n"}
                            <span style={{ color: "#888888" }}>
        // diagonal from (xmin, ymin) to (xmax, ymax).
                            </span>
                            {"\n"}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>void</span>{" "}
                            <span style={{ color: "#0066BB", fontWeight: "bold" }}>
                                CohenSutherlandLineClipAndDraw
                            </span>
                            (<span style={{ color: "#333399", fontWeight: "bold" }}>double</span> x0,{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>double</span> y0,{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>double</span> x1,{" "}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>double</span> y1)
                            {"\n"}
                            {"{"}
                            {"\n"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // compute outcodes for P0, P1, and whatever point lies outside the clip
                                rectangle
                            </span>
                            {"\n"}
                            {"\t"}OutCode outcode0 <span style={{ color: "#333333" }}>=</span>{" "}
                            ComputeOutCode(x0, y0);{"\n"}
                            {"\t"}OutCode outcode1 <span style={{ color: "#333333" }}>=</span>{" "}
                            ComputeOutCode(x1, y1);{"\n"}
                            {"\t"}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>
                                bool
                            </span> accept <span style={{ color: "#333333" }}>=</span>{" "}
                            <span style={{ color: "#007020" }}>false</span>;{"\n"}
                            {"\n"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>while</span> (
                            <span style={{ color: "#007020" }}>true</span>) {"{"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span> (
                            <span style={{ color: "#333333" }}>!</span>(outcode0{" "}
                            <span style={{ color: "#333333" }}>|</span> outcode1)) {"{"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // bitwise OR is 0: both points inside window; trivially accept and exit
                                loop
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}accept <span style={{ color: "#333333" }}>=</span>{" "}
                            <span style={{ color: "#007020" }}>true</span>;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>break</span>;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"}"} <span style={{ color: "#008800", fontWeight: "bold" }}>else</span>{" "}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span> (outcode0{" "}
                            <span style={{ color: "#333333" }}>&amp;</span> outcode1) {"{"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // bitwise AND is not 0: both points share an outside zone (LEFT, RIGHT,
                                TOP,
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // or BOTTOM), so both must be outside window; exit loop (accept is
                                false)
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>break</span>;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"}"} <span style={{ color: "#008800", fontWeight: "bold" }}>else</span>{" "}
                            {"{"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // failed both tests, so calculate the line segment to clip
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // from an outside point to an intersection with clip edge
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#333399", fontWeight: "bold" }}>double</span> x, y;
                            {"\n"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // At least one endpoint is outside the clip rectangle; pick it.
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}OutCode outcodeOut <span style={{ color: "#333333" }}>=</span>{" "}
                            outcode1 <span style={{ color: "#333333" }}>&gt;</span> outcode0{" "}
                            <span style={{ color: "#333333" }}>?</span> outcode1{" "}
                            <span style={{ color: "#333333" }}>:</span> outcode0;{"\n"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // Now find the intersection point;
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>// use formulas:</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        //{"   "}slope = (y1 - y0) / (x1 - x0)
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        //{"   "}x = x0 + (1 / slope) * (ym - y0), where ym is ymin or ymax
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        //{"   "}y = y0 + slope * (xm - x0), where xm is xmin or xmax
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // No need to worry about divide-by-zero because, in each case, the
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // outcode bit being tested guarantees the denominator is non-zero
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>{" "}
                            (outcodeOut <span style={{ color: "#333333" }}>&amp;</span> TOP) {"{"}
                            {"           "}
                            <span style={{ color: "#888888" }}>
        // point is above the clip window
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}x <span style={{ color: "#333333" }}>=</span> x0{" "}
                            <span style={{ color: "#333333" }}>+</span> (x1{" "}
                            <span style={{ color: "#333333" }}>-</span> x0){" "}
                            <span style={{ color: "#333333" }}>*</span> (ymax{" "}
                            <span style={{ color: "#333333" }}>-</span> y0){" "}
                            <span style={{ color: "#333333" }}>/</span> (y1{" "}
                            <span style={{ color: "#333333" }}>-</span> y0);{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}y <span style={{ color: "#333333" }}>=</span> ymax;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"}"} <span style={{ color: "#008800", fontWeight: "bold" }}>else</span>{" "}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>{" "}
                            (outcodeOut <span style={{ color: "#333333" }}>&amp;</span> BOTTOM) {"{"}{" "}
                            <span style={{ color: "#888888" }}>
        // point is below the clip window
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}x <span style={{ color: "#333333" }}>=</span> x0{" "}
                            <span style={{ color: "#333333" }}>+</span> (x1{" "}
                            <span style={{ color: "#333333" }}>-</span> x0){" "}
                            <span style={{ color: "#333333" }}>*</span> (ymin{" "}
                            <span style={{ color: "#333333" }}>-</span> y0){" "}
                            <span style={{ color: "#333333" }}>/</span> (y1{" "}
                            <span style={{ color: "#333333" }}>-</span> y0);{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}y <span style={{ color: "#333333" }}>=</span> ymin;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"}"} <span style={{ color: "#008800", fontWeight: "bold" }}>else</span>{" "}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>{" "}
                            (outcodeOut <span style={{ color: "#333333" }}>&amp;</span> RIGHT) {"{"}
                            {"  "}
                            <span style={{ color: "#888888" }}>
        // point is to the right of clip window
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}y <span style={{ color: "#333333" }}>=</span> y0{" "}
                            <span style={{ color: "#333333" }}>+</span> (y1{" "}
                            <span style={{ color: "#333333" }}>-</span> y0){" "}
                            <span style={{ color: "#333333" }}>*</span> (xmax{" "}
                            <span style={{ color: "#333333" }}>-</span> x0){" "}
                            <span style={{ color: "#333333" }}>/</span> (x1{" "}
                            <span style={{ color: "#333333" }}>-</span> x0);{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}x <span style={{ color: "#333333" }}>=</span> xmax;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"}"} <span style={{ color: "#008800", fontWeight: "bold" }}>else</span>{" "}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>{" "}
                            (outcodeOut <span style={{ color: "#333333" }}>&amp;</span> LEFT) {"{"}
                            {"   "}
                            <span style={{ color: "#888888" }}>
        // point is to the left of clip window
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}y <span style={{ color: "#333333" }}>=</span> y0{" "}
                            <span style={{ color: "#333333" }}>+</span> (y1{" "}
                            <span style={{ color: "#333333" }}>-</span> y0){" "}
                            <span style={{ color: "#333333" }}>*</span> (xmin{" "}
                            <span style={{ color: "#333333" }}>-</span> x0){" "}
                            <span style={{ color: "#333333" }}>/</span> (x1{" "}
                            <span style={{ color: "#333333" }}>-</span> x0);{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}x <span style={{ color: "#333333" }}>=</span> xmin;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"}"}
                            {"\n"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>
        // Now we move outside point to intersection point to clip
                            </span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#888888" }}>// and get ready for next pass.</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            <span style={{ color: "#008800", fontWeight: "bold" }}>if</span>{" "}
                            (outcodeOut <span style={{ color: "#333333" }}>==</span> outcode0) {"{"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}x0 <span style={{ color: "#333333" }}>=</span> x;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}y0 <span style={{ color: "#333333" }}>=</span> y;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}outcode0 <span style={{ color: "#333333" }}>=</span>{" "}
                            ComputeOutCode(x0, y0);{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"}"} <span style={{ color: "#008800", fontWeight: "bold" }}>else</span>{" "}
                            {"{"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}x1 <span style={{ color: "#333333" }}>=</span> x;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}y1 <span style={{ color: "#333333" }}>=</span> y;{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"\t"}outcode1 <span style={{ color: "#333333" }}>=</span>{" "}
                            ComputeOutCode(x1, y1);{"\n"}
                            {"\t"}
                            {"\t"}
                            {"\t"}
                            {"}"}
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            {"}"}
                            {"\n"}
                            {"\t"}
                            {"}"}
                            {"\n"}
                            {"}"}
                            {"\n"}
                        </pre>
                    </div>
                </>

                <h1 align="left" style={{ paddingTop: '20px' }}>We have opted to omit our implementation of the algorithm from this report due to its complexity and extensive handling of edge cases. Please refer to our Github repository for our version of the algorithm.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>In our implementation, we considered the "viewport" to be a "no-fly zone" and thus any line connecting two points that crossed a "no-fly zone" would have to have the distance around the edge of the "no-fly zone" added to the distance stored in the distance matrix before being considered by the random insertion heuristic. Furthermore, the path taken along the edge of the :"no-fly zones" to avoid the points is also stored in the distance matrix to reduce the number of calculations that would have to be repeated. Due to the small number of points and the extensive number of times these distances and paths would be referened, we decided that this was an acceptable tradeoff between time and space.</h1>

            </div>
            <div className="container-about" data-aos='fade-down' style={{ width: '70%', paddingTop: '20px', paddingBottom: '20px', align: 'center' }}>
                <h2 >Front end</h2>
                <h1 align="left" style={{ paddingTop: '20px' }}>To give users for this app a better accessibility, we have created this site to streamline the data transfer between the user (inputting their orders) and the database. Each page of this website has unique component structure coupled with different actions that help users order their coffee.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>We have created different components and corresponding actions between the site and the user, so that the user could conviniently choose their delivery location and choose coffees they want. After authenticating their credential through a login page (through userAction.js), the user would be able to choose their order.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>After logging in, the user will be able to conviniently scroll through the homepage to see what kind of coffee they want and their corresponding price that's being updated through react state components real time. They can choose to add the coffee into their cart.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>On the cart screen, they are able to modify their order, edit quantities of their order where their specific order is being updated and processed through react state components. After they have decided what to order, they can choose their delivery location (limited to certain spots on the campus).</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>After they choose to confirm their order, they will be directed to a Stripe pop up, where they add in their credit card information, and enter their detail. In the background, their order information is stored into MongoDB, where the system will take in the information and calculate the optimal path as discussed above.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>One special restriction we have put here, however, was the fact that the user can only choose where they want their coffee delivered. Even when they enter the delivery location by themselves, it's being overwritten by the specific location they chose from the popup on the map. Remember, this is a drone delivery system ON CAMPUS, not anywhere in the city :)</h1>

            </div>
            <div className="container-about" data-aos='fade-down' style={{ width: '70%', paddingTop: '20px', paddingBottom: '20px', align: 'center' }}>
                <h2 >Processing the data</h2>
                <h1 align="left" style={{ paddingTop: '20px' }}>After taking in input data from the front end, we needed a connector between the order data that's stored in MongoDB and the route planning we have done above.</h1>
                <h1 align="left" style={{ paddingTop: '20px' }}>We decided on a Python CRUD script in which for every 15 minutes, it would read in the order data from MongoDB, extract information from the read-in data, and convert that data into something the drone planning algorithm could process.</h1>
                <div
                    style={{
                        background: "#ffffff",
                        overflow: "auto",
                        width: "auto",
                        border: "solid gray",
                        borderWidth: ".1em .1em .1em .8em",
                        padding: ".2em .6em",
                        textAlign: "left"
                    }}
                >
                    <pre style={{ margin: 0, lineHeight: "125%" }}>
                        destList <span style={{ color: "#333333" }}>=</span> {"{"}
                        {"}"}
                        {"\n"}
                        {"\n"}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>try</span>:{"\n"}
                        {"    "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>while</span>{" "}
                        <span style={{ color: "#007020" }}>True</span>:{"\n"}
                        {"        "}time<span style={{ color: "#333333" }}>.</span>sleep(
                        <span style={{ color: "#0000DD", fontWeight: "bold" }}>900</span>){"\n"}
                        {"        "}client <span style={{ color: "#333333" }}>=</span>{" "}
                        MongoClient(CONNECTION_STRING){"\n"}
                        {"        "}db <span style={{ color: "#333333" }}>=</span> client
                        <span style={{ color: "#333333" }}>.</span>coffeedelivery{"\n"}
                        {"        "}collection <span style={{ color: "#333333" }}>=</span> db
                        <span style={{ color: "#333333" }}>.</span>orders{"\n"}
                        {"        "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>for</span> order{" "}
                        <span style={{ color: "#000000", fontWeight: "bold" }}>in</span> collection
                        <span style={{ color: "#333333" }}>.</span>find():{"\n"}
                        {"            "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>if</span> order[
                        <span style={{ backgroundColor: "#fff0f0" }}>'isDelivered'</span>]{" "}
                        <span style={{ color: "#333333" }}>==</span>{" "}
                        <span style={{ color: "#007020" }}>False</span>:{"\n"}
                        {"                "}orderLocation{" "}
                        <span style={{ color: "#333333" }}>=</span> order[
                        <span style={{ backgroundColor: "#fff0f0" }}>'shippingAddress'</span>]{"\n"}
                        {"                "}destList[
                        <span style={{ backgroundColor: "#fff0f0" }}>'orderLocation'</span>]{" "}
                        <span style={{ color: "#333333" }}>=</span> order[
                        <span style={{ backgroundColor: "#fff0f0" }}>'orderItems'</span>]{"\n"}
                        {"                "}collection<span style={{ color: "#333333" }}>.</span>
                        update({"{"}
                        <span style={{ backgroundColor: "#fff0f0" }}>"isDelivered"</span>:{" "}
                        <span style={{ backgroundColor: "#fff0f0" }}>"False"</span>
                        {"}"}, {"{"}
                        <span style={{ backgroundColor: "#fff0f0" }}>"$set"</span> :{" "}
                        <span style={{ backgroundColor: "#fff0f0" }}>"True"</span>
                        {"}"}){"\n"}
                        {"  "}
                        {"\n"}
                        {"        "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>with</span>{" "}
                        <span style={{ color: "#007020" }}>open</span>(
                        <span style={{ backgroundColor: "#fff0f0" }}>'deliveryOne'</span>,{" "}
                        <span style={{ backgroundColor: "#fff0f0" }}>'w'</span>){" "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>as</span>{" "}
                        convert_file:{"\n"}
                        {"            "}convert_file<span style={{ color: "#333333" }}>.</span>
                        write(json<span style={{ color: "#333333" }}>.</span>dumps(destList)){"\n"}
                        {"        "}
                        {"\n"}
                        {"\n"}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>except</span>{" "}
                        <span style={{ color: "#FF0000", fontWeight: "bold" }}>
                            KeyboardInterrupt
                        </span>
                        :{"\n"}
                        {"    "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>print</span>(
                        <span style={{ backgroundColor: "#fff0f0" }}>
                            "Press Ctrl-C to terminate the process"
                        </span>
                        ){"\n"}
                        {"    "}
                        <span style={{ color: "#008800", fontWeight: "bold" }}>pass</span>
                        {"\n"}
                    </pre>
                </div>


                <h1 align="left" style={{ paddingTop: '20px' }}>This script rests 15 minute before processing the data. After resting for 15 minutes, it would check the database for any order in the orders collection if there are still orders that weren't delivered yet. If there is, we would append them into the destList dictionary. This destList dictionary contains the locations that the drone has to visit next. After matching the values from the array of coordinates we have for each location, this information will be processed by the route planning algorithms we have discussed above and the drone will move to those points.</h1>

            </div>

        </div>


    );
}

