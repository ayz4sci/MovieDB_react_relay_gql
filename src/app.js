import React from "react";
import ReactDOM from "react-dom";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./environment";
import Home from "./components/home/index";

import styles from "./styles.css";

const home = (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query appQuery {
        allCinemaDetails {
          edges {
            node {
              id
              slug
              hallName
            }
          }
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <div>Error!</div>;
      }  
      if (props) {
        return <Home />;
      }
      return <div>Loading...</div>;
    }}
  />
);

ReactDOM.render(home, document.getElementById("root"));
