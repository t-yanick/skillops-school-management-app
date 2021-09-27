import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard() {

  return (
    <div>
      <h1>Welcome to the dashboard</h1>
      <div className="links">
        <NavLink to="/students" className="link mb2 p-2" activeClassName="active" exact>
          Registered students
        </NavLink>
        <NavLink to="/add" className="link mb2 p-2" activeClassName="active" exact>
          Add student
        </NavLink>
      </div>
    </div>
  )
}

export default Dashboard;