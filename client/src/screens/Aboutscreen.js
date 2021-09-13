import React, { useState, useEffect } from 'react';
import dronepic from "../images/about1.jpeg"
import dronepic2 from "../images/about2.jpg"
import SyntaxHighLighter from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Aboutscreen() {
    AOS.init({})
    return (
        <div>
            <div className="container" data-aos='fade-down' style={{ width: '70%', paddingBottom: '20px' }}>
                <h3 >About us</h3>


                <img src={dronepic} alt="drone" className="img-fluid" />
                <h1 align ="left" style={{ paddingTop: '20px'}}> Getting up and getting coffee is such a huge commitment a college student has to make every morning. So we thought,
                    Why not have a small drone deliver the coffee for every college student in the morning? So, we decided to make an end-to-end
                    fully automated drone delivery system for students wanting coffee on campus. </h1>
            </div>

            <div className="container" data-aos='fade-down' style={{ width: '70%', paddingBottom: '20px' }}>
                <h2 >Programming the drone</h2>



                <h1 align ="left" style={{ paddingTop: '20px' }}> The routing system for our drone delivery system can be considered a practical application of the travelling salesperson problem, wherein the drone must complete a series of deliveries in a Hamiltonian circuit while minimizing the overall length of the tour. </h1>
                <h1 align ="left" style={{ paddingTop: '20px' }}> As one of the most famous NP-hard problems in computer science, there exist many heurtisics to approximate the length and path taken of a optimal tour. However, given that we anticipate a relatively small number of points (less than 10 per trip), we opted to solve the problem optimally for each tour.  </h1>
                <h1 align ="left" style={{ paddingTop: '20px' }}> The input for this routing system is given by a set of integer coordinates based on the relative coordinate system of the university (i.e. we would define the Diag to be the origin (0,0) and perform all further calculations relative to this origin.)</h1>
                <SyntaxHighLighter language="javascript" style = {dracula} align="left">
                    {
                        "4 \n - 3 2 \n 2 4 \n 1 2 \n 0 3"
                    }
                </SyntaxHighLighter>
                <h1 align ="left" style={{ paddingTop: '20px' }}> In the future, we hope to be able to extend this system to utilize GPS coordinates for both the input coordinates and the coordinates of the "no-fly zones" discussed below.</h1>
                <h1 align ="left" style={{ paddingTop: '20px' }}> In order to do this, we utilized the random insertion heuristic. The heuristic begins by inserting both the starting point and the closest point to the starting point into the path. Then, a point k is chosen arbitrarily (in our implementation, we simply used the order that the points were read in) and an insertion point is found in the existing path that results in the smallest increase in the total length of the tour.</h1>
                <h1 align ="left" style={{ paddingTop: '20px' }}>Because of the extensive number of times we would have to calculate the distance between points (especially when we considered paths that transitted "no-fly zones"), we opted to precalculate all of the distances between the points as well as any routing required to get around these "no-fly zones" and store them in a distance matrix.</h1>
                <h1 align ="left" style={{ paddingTop: '20px' }}>The C++ code snippet that implements this functionality is shown below:</h1>
                <SyntaxHighLighter language="javascript" style = {dracula} align="left">
                    {
                        "// Attempts to find the solution to the given TSP using the random \n // insertion heuristic \n void fastTSP() { \n \n path.reserve(numPoints); \n int numVisited = 0; // also serves as the index of points in coords \n coords[0].visited = true; \n int toAdd = findClosestPoint(0); \n coords[toAdd].visited = true; \n path.push_back(0); \n path.push_back(toAdd);\n while(numVisited < static_cast<int>(numPoints)) { \n \n toAdd = numVisited++; \n \n if(coords[toAdd].visited) { \n continue; \n } \n \n int insertIdx = findMinInsertionIdx(toAdd); \n path.insert(begin(path) + insertIdx, toAdd); \n coords[toAdd].visited = true;\n \n } // while \n \n calcTotalDist(); \n \n } // fastTSP() \n"
                    }
                </SyntaxHighLighter>
                <h1 align ="left" style={{ paddingTop: '20px' }}>Once we had created a path using the random insertion heurisitc, we generated all possible permutations of the tour by swapping the pairs of points in the tour using the path created by the random insertion heuristic as an upper bound for the tour distance. To bound away many unfeasible paths, we also made use of a "promising" function that would avoid permuting any paths that were guaranteed to be longer than the path the heuristic had already created.</h1>

            </div>


        </div>


    );
}

