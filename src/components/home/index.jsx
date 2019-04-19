import React from 'react';
import TopBar from '../topbar/topbar';
import Filter from '../Filter';
import Dashboard from '../Dashboard';
import Footer from '../Footer';
import './home.scss';

const Home = (props) => (
  <div className="content">
    <TopBar />
    <div className="main-content">
      <div className="content-headers">
        <div className="filters-header">
          <h1 className="header">Filters</h1>
        </div>
        <div className="jobs-header">
          <h1 className="header">All Jobs</h1>
        </div>
      </div>
      <div className="content-group">
        <Filter />
        <Dashboard {...props} />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
