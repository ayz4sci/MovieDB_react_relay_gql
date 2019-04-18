/* eslint-disable require-jsdoc */
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import Job from '../Job/index.jsx';
import './styles.scss';

class Dashboard extends React.Component {
  render() {
    const {
      jobs: {
        edges
      }
    } = this.props;
    return (
      <div className="movies-container">
        {edges.map(({ node }) => (
          <div key={node.__id}>
            <Job job={node} />
          </div>
        )
        )}
      </div>

    );
  }
}

Dashboard.propTypes = {
  jobs: PropTypes.shape({
    edges: PropTypes.array.isRequired
  })
};

export default createFragmentContainer(Dashboard, graphql`
  fragment Dashboard_jobs on JobBoardNodeConnection {
      edges{
        node {
         ...Job_job
    }
    }
  }
`);
