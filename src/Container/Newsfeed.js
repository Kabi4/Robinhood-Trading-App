import React from 'react';
import LineGraph from '../Components/LineGraph';
import './Newsfeed.css';
const Newsfeed = () => {
    return (
        <div className="newsfeed">
            <div className="newsfeed_container">
                <div className="newsfeed_chartSec">
                    <div className="newsfeed_protfolio">
                        <h1>$284,637.73</h1>
                        <p>+$100.21 (+41.63%) Today</p>
                    </div>
                    <div className="newsfeed_chart">
                        <LineGraph />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsfeed;
