/* eslint-disable require-jsdoc */
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./environment";
import Home from "./components/Home/index";

import styles from "./styles.css";

class App extends React.Component { 
  render() {
    return <Home />;
  }
}

export default App;
