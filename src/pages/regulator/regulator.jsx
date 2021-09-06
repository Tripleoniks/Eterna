import React from 'react';
import "./regulator.scss";


const Regulator = () => {
    return ( 
        <div className="regulator">
            <h1 i="title">Regulator</h1>
            <div className="card">
                <div className="content">
                    <div className="head">
                    <h4>View Regulator Visits</h4>
                    <button>
                        Export csv
                        <i className="fas fa-file-alt"></i>
                    </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Regulator;