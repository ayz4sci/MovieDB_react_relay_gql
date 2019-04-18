import React from 'react';
import { graphql, QueryRenderer } from "react-relay";

import _ from 'lodash';
import environment from "../../environment";
import TopBar from '../topbar/topbar';
import Filter from '../Filter';
import Dashboard from '../Dashboard';
import Footer from '../Footer';
import './home.scss';

class Home extends React.Component {
  state = {
    searchTerm: ""
  }
  
  handleSubmit = (searchTerm) => {
    this.setState({ searchTerm });
  };

  delayedHandleSubmit = _.debounce(this.handleSubmit, 300);

  render() {
    const { searchTerm } = this.state;
    const DashboardQueryRenderer = (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query homeQuery ($searchTerm: String) {
            allJobs(jobTitle_Icontains: $searchTerm, before: "12/3/2020") {
              ...Dashboard_jobs
            }
          }
        `}
        variables={{ searchTerm }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }  
          if (props) {
            return <Dashboard jobs={props.allJobs} />;
          }
          return <div>Loading...</div>;
        }}
      />
    );

    return (
      <div className="content">
        <TopBar handleSearch={this.delayedHandleSubmit} />
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
            {DashboardQueryRenderer}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
