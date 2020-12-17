import React from 'react';
import './Stats.css';
const Stats = () => {
    return (
        <div className="stats">
            <div className="stats_container">
                <div className="stats_header">
                    <p>Stocks</p>
                </div>
            </div>
            <div className="stats_content">
                <div className="stats_rows"></div>
            </div>
            <div className="stats_header">
                <p>Lists</p>
            </div>
        </div>
    );
};

export default Stats;
