import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <div>
          <Link to={'/coviData'}>Covid graph</Link>
        </div>
        <div>
          <Link to={'/matrix'}>Covid matrix</Link>
        </div>
        <div>
          <Link to={'regression'}>Regression</Link>
        </div>
      </>
    )
  }
}

export default Dashboard;