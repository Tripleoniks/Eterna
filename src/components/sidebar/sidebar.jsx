import React, {useState} from 'react';
import './sidebar.scss'
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const [expanse1, setExpanse1] = useState(false)
    
    return (
        <div className="side-bar">
            
            <div className="nav">
                <NavLink className="nav-item" activeClassName="active" exact to="/"><i className="fas fa-home"></i>Dashboard</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/regulator"><i className="fab fa-black-tie"></i>Regulators Visits</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/reports"><i className="fas fa-chart-bar"></i>Report</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/entities"><i className="fas fa-suitcase"></i>Add / Remove Entities</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/agencies"><i className="fas fa-coins"></i>Add / Remove Agencies</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/stakeholders"><i className="far fa-id-badge"></i>Stakeholders</NavLink>
                {/* {expanse1 && <ul><li>Add Stakeholders</li><li>Stakeholder Activities</li><li>Upload eCards</li><li><Logged Activities<li></ul>} */}
                <NavLink className="nav-item" activeClassName="active" exact to="/agencies2"><i className="fas fa-coins"></i>Manage Licenses/Permits</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/agencies3"><i className="fas fa-coins"></i>Account Settings</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/agencies4"><i className="fas fa-coins"></i>Document Manager</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/agencies5"><i className="fas fa-coins"></i>Manage News & Events</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/agencies6"><i className="fas fa-lock"></i>Change Password</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/agencies7"><i className="fas fa-user-circle"></i>Logout</NavLink>
            </div>
            
        </div>
    )
}

export default SideBar;
