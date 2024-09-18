import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Projects</h1>
                <div className="work-list">
                    <div className="work">
                        <img src="images/telegram-bus-bot.png" alt="Telegram Bus Bot" />
                        <div className="layer">
                            <h3>Telegram Bus Bot</h3>
                            <p>Find the bus timings of the any given bus stop in Singapore!</p>
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/discord-bot.png" alt="Discord Music Bot" />
                        <div className="layer">
                            <h3>Discord Music Bot</h3>
                            <p>Spin some tunes with one simple command!</p>
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/NoFailRefrigerator.png" alt="Cold Chain Storage" />
                        <div className="layer">
                            <h3>Cold Chain Storage Solution</h3>
                            <p>Track refrigeration unit health in cold chain logistics with AWS and Isolation Forest.</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">See more</a>
            </div>
        </div>
    );
};

export default Portfolio;
