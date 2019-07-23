import React, { useState } from "react";
import PropTypes from "prop-types";

import { Field, connect, getIn } from "formik";

const CustomField = props => {
  const { type, name, value, className, placeholder } = props;
  const [focus, setFocus] = useState(false);

  const error = getIn(props.formik.errors, name);
  const touch = getIn(props.formik.touched, name);

  return (
    <span
      className={
        `${className} input--effect ` +
        ((focus || value !== "") && "input--effect-focus")
      }
    >
      <span
        className={
          `input--text-effect ` +
          ((focus || value !== "") && "input--text-effect-focus")
        }
      >
        {placeholder}
      </span>
      <Field
        type={type}
        name={name}
        className="input"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {error && touch && (
        <span
          className={
            `input--error ` + ((focus || value !== "") && "input--error-focus")
          }
        >
          <span
            style={
              focus || value !== ""
                ? {
                    transform: `translateX(${placeholder.length *
                      (name === "confirmPassword" ? 0.46 : 0.3) -
                      (name === "email" ? 1.35 : 0)}rem)`
                  }
                : {
                    left: `${placeholder.length}rem`,
                    transform: `translateX(-${placeholder.length - 0.5}rem)`
                  }
            }
          >
            <span />
            {error}
          </span>
        </span>
      )}
    </span>
  );
};

CustomField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default connect(CustomField);
