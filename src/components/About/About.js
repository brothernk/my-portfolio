import React from "react";
import Nav from "../../components/Nav/Nav";

const About = () => (
    <div className="about-container">
        <div className="left-side">
            <h2>about me</h2>
            <Nav></Nav>
        </div>

        <div className="about-text">
            <p>
                Hi, I'm Kate. I'm a full stack developer located in the Twin Cities.
                I have a B.A in Advertising, and a Full Stack Development Certificate
                from the University of Minnesota. I am a logical creative with a passion for clean and
                vibrant design. 
            </p>
            <p>
                I have experience in both front-end and back-end applciations, and I am fully comfortable with the MERN stack, HTML, CSS & Sass, JavaScript & jQuery,
                and MySQL. I have a growing knowledge in PHP, Java, and Python, and continue to learn more every day. 
            </p>
            <p>
                When I'm not busy coding I read everything I can get my hands on, and cook way more than I can actually eat. 
                I love trying and learning new things - I'm currently working on
                my conversational Norweigan, attempting to garden, and illustrating a children's book. 
            </p>
        </div>
    </div>
);

export default About;