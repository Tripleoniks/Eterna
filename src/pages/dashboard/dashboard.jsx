import React from 'react';
import chartDatax from '../../static/chartData';

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <h1>DASHBOARD PAGE</h1>
            {chartDatax.map(({title, id}) => {
                return (
                    <div className="item" key={id}>
                       <p className="title">{title}</p>

                    </div>
                )
            })}
        </div>
     );
}
 
export default Dashboard;