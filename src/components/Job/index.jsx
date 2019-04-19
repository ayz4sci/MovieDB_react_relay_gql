/* eslint-disable require-jsdoc */
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import './styles.scss';

class Job extends React.Component {
  render() {
    const {
      job: {
        jobTitle,
        genderMf,
        company: {
          companyName
        }
      }
    } = this.props;
    return (
      <div className="job-card">
        {genderMf === 'FEMALE'
          ? <img className="card-image" alt="" src="https://www.shareicon.net/download/2015/10/04/112039_man.svg" /> 
          : <img className="card-image" alt="" src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-14-512.png" />}
        <div>
          <h1 className="company-name">{companyName}</h1>
          <h1 className="job-title">{jobTitle}</h1>
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  job: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    genderMf: PropTypes.string.isRequired,
    company: PropTypes.shape({
      companyName: PropTypes.string.isRequired
    })
  }) 
};


export default createFragmentContainer(Job, graphql`
  fragment Job_job on JobBoardNode {
    slug
    jobTitle
    genderMf
    closingDate
    company {
      companyName
    }
}
`);
