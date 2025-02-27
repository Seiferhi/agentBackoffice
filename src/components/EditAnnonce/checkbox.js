import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
  <input
    type={type}
    name={name}
    checked={checked}
    onChange={e => onChange(e)}
    style={{
      width: "87px",
      height: "30px"
    }}
  />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;