import React, { useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');  // State to track the active tab

    // Function to switch tabs
    const opentab = (tabname) => {
        setActiveTab(tabname);
    };

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
                            <p 
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
                                onClick={() => opentab('skills')}
                            >
                                Skills
                            </p>
                            <p 
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} 
                                onClick={() => opentab('experience')}
                            >
                                Experience
                            </p>
                            <p 
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
                                onClick={() => opentab('education')}
                            >
                                Education
                            </p>
                        </div>
                        {/* Conditionally render tab content based on activeTab */}
                        <div className="tab-contents">
                            {activeTab === 'skills' && (
                                <div id="skills" className="active-tab">
                                    <ul>
                                        <li><span>Web Development</span><br />Web App Development</li>
                                        <li><span>General Programming</span><br />Taken courses on Java, C++, Haskell. Self learning Data Structures and Algorithms.</li>
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'experience' && (
                                <div id="experience" className="active-tab">
                                    <ul>
                                        <li><span>To be continued...</span></li>
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'education' && (
                                <div id="education" className="active-tab">
                                    <ul>
                                        <li><span>2025 - 2030 (est.)</span><br />NUS Computer Science and Mathematics Double Degree Programme</li>
                                        <li><span>2021 - 2022</span><br />Nanyang Junior College</li>
                                        <li><span>2017 - 2020</span><br />Bowen Secondary</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
