import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles.css";
import {graphql, QueryRenderer} from 'react-relay';
import environment from './environment'


const hello =   <QueryRenderer
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

render={({error, props}) => {
  if (error) {
    return <div>Error!</div>
  }
  else if (props) {
    return <h1>hello, react</h1>
  } 
  return <div>Loading...</div>
}}
/>
ReactDOM.render(
  hello,
  document.getElementById('root')
);