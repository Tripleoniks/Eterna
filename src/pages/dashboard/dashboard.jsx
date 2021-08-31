import React from 'react';
import chartDatax from '../../static/chartData';

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <h1>DASHBOARD PAGE</h1>
            {chartDatax.map(({title}, index) => {
                return (
                    <div className="item" key={index}>
                       <p className="title">{title}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Dashboard;