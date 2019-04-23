import React from "react";
import { 
  FormGroup, 
  Input
} from "reactstrap";
import PropTypes from 'prop-types';
import "./filter.scss";

const DateInput = (props) => (
  <div>
    <p>
      <strong>CLOSING DATE:</strong>
    </p>
    <FormGroup>
      <Input type="date" value={props.date} onChange={props.onChange} />
    </FormGroup>
  </div>
); 

DateInput.propTypes = {
  date: PropTypes.string,
  onChange: PropTypes.func

};

export default DateInput;
