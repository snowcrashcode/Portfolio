import React from 'react';

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="images/snowcrash.png" alt="About Me" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>Hi, my name is Ho Kei Ching, and I'm a 20 year old looking to break into the tech industry.</p>
                        <div className="tab-titles">
                            <p className="tab-links active-link" onClick={() => opentab('skills')}>Skills</p>
                            <p className="tab-links" onClick={() => opentab('experience')}>Experience</p>
                            <p className="tab-links" onClick={() => opentab('education')}>Education</p>
                        </div>
                        <div className="tab-contents active-tab" id="skills">
                            <ul>
                                <li><span>Web Development</span><br />Web App Development</li>
                                <li><span>General Programming</span><br />Taken courses on Java, C++, Haskell. Self learning Data Structures and Algorithms.</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>To be continued...</span></li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>2025 - 2030 (est.)</span><br />NUS Computer Science and Mathematics Double Degree Programme</li>
                                <li><span>2021 - 2022</span><br />Nanyang Junior College</li>
                                <li><span>2017 - 2020</span><br />Bowen Secondary</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
