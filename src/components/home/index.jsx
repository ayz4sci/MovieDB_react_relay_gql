import React from 'react';
import TopBar from '../topbar/topbar';
import Filter from '../filter/filter.js';
import Dashboard from '../Dashboard/dashboard.js';
import Footer from '../Footer/footer.js';
import './home.scss';

const Home = () => (
  <div className="content">
    <TopBar />
    <div className="main-content">
      <Filter />
      <Dashboard />
    </div>
    <Footer />
  </div>
);

export default Home;
