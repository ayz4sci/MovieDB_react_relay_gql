/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { 
  Form, 
  Button 
} from "reactstrap";
import { 
  createFragmentContainer, 
  graphql 
} from 'react-relay';
import DateInput from './dateInput.jsx';
import GenderInput from './genderInput.jsx';
import "./filter.scss";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      date: ""
    };
  }

  onChangeGender = (event) => {
    this.setState({ gender: event.target.value });
  }

  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  }

  onFilterSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.onFilterSubmit}>
          <GenderInput 
            gender={this.state.gender} 
            onChange={this.onChangeGender} 
          />
          <DateInput date={this.state.date} onChange={this.onChangeDate} />
          <Button>Apply</Button>
        </Form>
      </div>
    );
  }
}


export default Filter;
