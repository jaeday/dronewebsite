import React, { useState, useEffect } from 'react';
import dronepic from "../images/about1.jpeg"
import dronepic2 from "../images/about2.jpg"
import SyntaxHighLighter from 'react-syntax-highlighter'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Aboutscreen() {
    AOS.init({})
    return (
        <div>
            <div className="container" data-aos='fade-down' style={{ width: '70%', paddingBottom: '20px' }}>
                <h3 >About us</h3>


                <img src={dronepic} alt="drone" className="img-fluid" />
                <h1 style={{ paddingTop: '20px' }}> Getting up and getting coffee is such a huge commitment a college student has to make every morning. So we thought,
                    Why not have a small drone deliver the coffee for every college student in the morning? So, we decided to make an end-to-end
                    fully automated drone delivery system for students wanting coffee on campus. </h1>
            </div>

            <div className="container" data-aos='fade-down' style={{ width: '70%', paddingBottom: '20px' }}>
                <h2 >Programming the drone</h2>



                <h1 style={{ paddingTop: '20px' }}> The routing system for our drone delivery system can be considered a practical application of the travelling salesperson problem, wherein the drone must complete a series of deliveries in a Hamiltonian circuit while minimizing the overall length of the tour. </h1>
                <h1 style={{ paddingTop: '20px' }}> As one of the most famous NP-hard problems in computer science, there exist many heurtisics to approximate the length and path taken of a optimal tour. However, given that we anticipate a relatively small number of points (less than 10 per trip), we opted to solve the problem optimally for each tour.  </h1>
                <h1 style={{ paddingTop: '20px' }}> The input for this routing system is given by a set of integer coordinates based on the relative coordinate system of the university (i.e. we would define the Diag to be the origin (0,0) and perform all further calculations relative to this origin.)</h1>
                <SyntaxHighLighter language="javascript" style={dracula}>
                    {
                        "class HelloMessage extends React.Component {\n render() {\n return ( \n <div>\nHello {this.props.name}\n</div>\n);\n }\n}\n\nReactDOM.render(\n<HelloMessage name='Taylor' />,\ndocument.getElementById('hello-example')\n);"
                    }
                </SyntaxHighLighter>
            </div>


        </div>


    );
}

