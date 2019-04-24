import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button } from 'reactstrap';
import './topbar.scss';

const TopBar = ({ handleSearch }) => (
  <div className="topbar">
    <div className="topbar-content">
      <div className="logo">
        <img src="../../../assets/images/logo.png" alt="logo" />
      </div>
      <div className="search-form">
        <Form>
          <FormGroup>
            <input 
              type="text" 
              name="search" 
              placeholder="search for job by title" 
              onChange={(event) => {
                handleSearch(event.target.value);
              }}
            />
            <Button type="submit" size="sm" color="primary">Search</Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  </div>
);

TopBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default TopBar;
