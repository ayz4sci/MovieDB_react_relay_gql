/* eslint-disable require-jsdoc */
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./environment";
import Home from "./components/Home/index";

import styles from "./styles.css";

const allJobs = graphql`
  query AppJobsQuery {
    allJobs(before: "12/3/2020") {
      ...Dashboard_jobs
  }
}
`;
class App extends React.Component { 
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={allJobs}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }  
          if (props) {
            return <Home jobs={props.allJobs} />;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default App;
