/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import PropTypes from 'prop-types';
import "./filter.scss";

const GenderInput = (props) => (
  
  <div>
    <p>
      <strong>GENDER</strong>
    </p>
    <FormGroup check>
      <Label check>
        <Input 
          type="checkbox" 
          onChange={props.onChange} 
          value="female" 
          checked={props.gender === 'female'} 
        /> FEMALE
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input 
          type="checkbox" 
          value="male" 
          onChange={props.onChange} 
          checked={props.gender === 'male'} 
        /> MALE
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input 
          type="checkbox" 
          value="NOTSPECCIFIED" 
          onChange={props.onChange} 
          checked={props.gender === 'NOTSPECCIFIED'} 
        /> NOTSPECCIFIED
      </Label>
    </FormGroup>
  </div>
);

GenderInput.propTypes = {
  gender: PropTypes.string,
  onChange: PropTypes.func

};

export default GenderInput;
