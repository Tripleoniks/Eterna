import React from 'react';
import chartDatax from '../../static/chartData';
import tableData from '../../static/dashbaord-table';
import './dashboard.scss';



const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <h3 id="title">Dashboard</h3>
            <div className="flex-card">
                {chartDatax.map(({title, overallPercent, icon, sTitle, keys}, index) => {
                return (
                    <div className="item" key={index}>
                        <img src={icon} alt="icon" srcset="" id="icn" />
                        <p className="perct">{overallPercent}</p>
                       
                       <p className="title">{title}</p>
                       
                   
                       <div className="subs">
                           {sTitle.map(({title, val}, index) => {
                               return (
                                   <div className="info">
                                       <p className="s-title">{title}:</p>
                                       <p className="val">{val}</p>
                                   </div>
                                   
                               )
                           })}
                       </div>
                       <div className="keuys">
                           {keys.map(({name, color}, index) => {
                               return (
                                   <p className="label"><span style={{color: `${color}`}}><i className="fas fa-circle"></i></span>{name}</p>
                               )
                           })}
                       </div>
                    </div>
                )
            })}
            </div>
            <div className="bottom">
                <h3>Latest Licenses & Permit</h3>
                <div className="btn-wrap">
                    <div className="btn-item">
                        <button id="btn1st">
                            All Licenses
                        </button>
                        <button style={{backgroundColor: "#FA0000"}}>
                            Approach
                        </button>
                        <button style={{backgroundColor: "#E2B32E"}}>
                           Fulfil
                        </button>
                        <button style={{backgroundColor: "#338B5C"}} >
                            Closed
                        </button>
                    </div>
                </div>
                <div className="show-search">
                    <div className="show">
                        <span>Show</span>
                        <div className="select">
                            <select id="list">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <span>entries</span>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search" /><i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="table">
                <table className="blueTable">
                    <thead>
                    <tr>
                    <th>Entities</th>
                    <th>License</th>
                    <th>Agency</th>
                    <th>Field Office</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map(({Entities, Lincense, Agency, FieldOffice}, index) => {
                        return (
                            <tr key={index}>
                                <td>{Entities}</td>
                                <td>{Lincense}</td>
                                <td>{Agency}</td>
                                <td>{FieldOffice}</td>
                            </tr>
                        )
                    })}
                     </tbody>
                    </table>
                </div>
                
                <div className="foot">
                        <div className="foot-item">                        
                        <button>Prev</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>Next</button>
                        </div> <br />
                        <label htmlFor=".foot-item">Showing 1 to 5 of 418 entries</label>
                    </div>
                   
            </div>
           
        </div>
     );
}
 
export default Dashboard;