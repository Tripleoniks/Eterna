import React, {useState} from 'react';
import './sidebar.scss'
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const [expanse1, setExpanse1] = useState(false)
    
    return (
        <div className="side-bar">
            <div className="logo">
                <div className="img"></div>
            </div>
            
            
            
            <div className="nav">
                <NavLink className="nav-item" activeClassName="active" exact to="/"><i className="fas fa-home"></i>Dashboard</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/regulator"><i className="fab fa-black-tie"></i>Regulators Visits</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/reports"><i className="fas fa-chart-bar"></i>Report</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/entities"><i className="fas fa-suitcase"></i>Add / Remove Entities</NavLink>
                <NavLink onClick={() => setExpanse1(prev => !prev)} className="nav-item" activeClassName="active" exact to="/agencies"><i className="fas fa-coins"></i>Add / Remove Agencies</NavLink>
                <NavLink onClick={() => setExpanse1(prev => !prev)} className="nav-item" activeClassName="active" exact to="/region"><i class="fas fa-map-marker-alt"></i>Add / Remove Region</NavLink>
                <>
                <NavLink className="nav-item" activeClassName="active" exact to="/stakeholders"><i className="far fa-id-badge"></i>Stakeholders</NavLink>
                <ul className="opt1">
                    <li>Add Stakeholders</li>
                    <li>Stakeholder Activities</li>
                    <li>Upload eCards</li>
                    <li>Logged Activities</li>
                </ul>
                </>
                <>
                <NavLink className="nav-item" activeClassName="active" exact to="/licenses"><i className="fas fa-layer-group"></i>Manage Licenses/Permits</NavLink>
                <ul className="opt1">
                    <li>License</li>
                    <li>Track & Update License</li>
                </ul>
                </>
                <>
                <NavLink className="nav-item" activeClassName="active" exact to="/settings"><i className="fas fa-chart-bar"></i>Account Settings</NavLink>
                <ul className="opt1">
                    <li>Add User</li>
                </ul>
                </> 
                <NavLink className="nav-item" activeClassName="active" exact to="/documents"><i className="fas fa-archive"></i>Document Manager</NavLink>
                <>
                <NavLink className="nav-item" activeClassName="active" exact to="/news"><i className="fas fa-book"></i>Manage News & Events</NavLink>
                <ul className="opt1">
                    <li>News</li>
                    <li>Events</li>
                </ul>
                </>
                <NavLink className="nav-item" activeClassName="active" exact to="/change-password"><i className="fas fa-lock"></i>Change Password</NavLink>
                <NavLink className="nav-item" activeClassName="active" exact to="/logout"><i className="fas fa-user-circle"></i>Logout</NavLink>
            </div>
            
        </div>
    )
}

export default SideBar;
