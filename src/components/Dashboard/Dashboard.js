import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Dashboard() {

  return (
    <div>
      <Link to="/signout">Sign Out</Link>
      <h1>Welcome to the dashboard</h1>
      <div className="links">
        <NavLink to="/students" className="link mb2 p-2" activeClassName="active" exact>
          Registered students
        </NavLink>
        <NavLink to="/add" className="link mb2 p-2" activeClassName="active" exact>
          Add student
        </NavLink>
        <NavLink to="/classrooms" className="link mb2 p-2" activeClassName="active" exact>
          Available classrooms/levels
        </NavLink>
        <NavLink to="/add-classroom" className="link mb2 p-2" activeClassName="active" exact>
          Add Classroom
        </NavLink>
      </div>
    </div>
  )
}

export default Dashboard;