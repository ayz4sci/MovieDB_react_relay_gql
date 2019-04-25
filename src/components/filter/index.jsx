/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { 
  Form, 
  Button,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import PropTypes from 'prop-types';
import "./filter.scss";

const Filter = ({ handleGender, gender }) => (
  <div className="filters">
    <FormGroup check>
      <Label check>
        <Input 
          type="checkbox" 
          onChange={(event) => handleGender(event.target.value)} 
          value="female" 
          checked={gender === "female"} 
        /> FEMALE
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input 
          type="checkbox" 
          value="male" 
          onChange={(event) => handleGender(event.target.value)} 
          checked={gender === "male"} 
        /> MALE
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input 
          type="checkbox" 
          value="notspecified" 
          onChange={(event) => handleGender(event.target.value)} 
          checked={gender === "notspecified"} 
        /> NOT SPECCIFIED
      </Label>
    </FormGroup>
  </div>
);
  
Filter.propTypes = {
  handleGender: PropTypes.func.isRequired,
  gender: PropTypes.string

};


export default Filter;