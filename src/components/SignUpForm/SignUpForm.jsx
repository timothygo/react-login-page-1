import React from "react";
import "./SignUpForm.scss";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomField from "../CustomField";

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords does not match")
});

const SignUpForm = () => {
  const initialFormValues = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  return (
    <div className="signup-form">
      <div className="signup-form__header">
        <a href="/" className="btn--primary">
          Already have an Account?
        </a>
      </div>
      <div className="signup-form__main">
        <h1>Start your free trial</h1>
        <p className="signup-form__main__message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          velit voluptas adipisci ducimus, quod illo!
        </p>
        <Formik
          initialValues={initialFormValues}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {}}
          render={bag => {
            const { values } = bag;
            const { email, password, confirmPassword } = values;
            return (
              <Form className="signup-form__main__form" noValidate>
                <CustomField
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Email"
                  className="signup-form__main__form__input"
                />

                <CustomField
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="signup-form__main__form__input"
                />

                <CustomField
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  className="signup-form__main__form__input"
                />

                <button type="submit" className="btn--cta">
                  Sign up
                </button>
              </Form>
            );
          }}
        />

        <p className="signup-form__main__agreement">
          By signing up you agree to the Musique <a href="#">Privacy Policy</a>{" "}
          and <a href="#">Terms of Use</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
