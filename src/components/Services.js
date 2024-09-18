import React from 'react';

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Web Design</h2>
                        <p>Self taught myself HTML, CSS, JavaScript, and React through The Odin Project and other online tutorials.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-crop"></i>
                        <h2>Problem Solving</h2>
                        <p>I like to sit down and think about solutions to everyday problems.</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-codepen"></i>
                        <h2>Teamwork</h2>
                        <p>I truly believe that teamwork and collaboration are the most valuable skills that any software engineer should possess.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
