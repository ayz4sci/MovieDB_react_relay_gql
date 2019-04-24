/* eslint-disable require-jsdoc */
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
    searchTerm: "",
    gender: "",
  }
  
  handleSubmit = (searchTerm) => {
    this.setState({ searchTerm });
  };

  handleChangeGender = gender => {
    this.setState({ gender });
  }

  delayedHandleSubmit = _.debounce(this.handleSubmit, 300);

  render() {
    const { searchTerm, gender } = this.state;
    const DashboardQueryRenderer = (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query homeQuery ($searchTerm: String, $gender: String) {
            allJobs(
              jobTitle_Icontains: $searchTerm,
               before: "12/3/2020",
              genderMf: $gender
              ) {
              ...Dashboard_jobs
            }
          }
        `}
        variables={{ searchTerm, gender }}
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
            <Filter gender={gender} handleGender={this.handleChangeGender} />
            {DashboardQueryRenderer}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;