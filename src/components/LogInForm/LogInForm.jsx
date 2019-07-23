import React from "react";
import "./LoginForm.scss";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomField from "../CustomField";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter an email"),
  password: Yup.string()
});

const LogInForm = () => {
  const initialFormValues = {
    email: "",
    password: ""
  };

  return (
    <div className="login">
      <div className="login__header">
        <span>Don't have a Musique account?</span>
        <a href="/register" className="btn--primary">
          Create an Account
        </a>
      </div>
      <div className="login__main">
        <h2>
          <span className="login__main__logo">
            MUSI<span>QUE</span>
          </span>
        </h2>
        <h1>Login to your account</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          accusamus enim earum expedita dignissimos minus.
        </p>
        <Formik
          initialValues={initialFormValues}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
          render={bag => {
            const { values } = bag;
            const { email, password } = values;
            return (
              <Form className="login__main__form" noValidate>
                <CustomField
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Email"
                  className="login__main__form__input"
                />

                <CustomField
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="login__main__form__input"
                />

                <button type="submit" className="btn--cta">
                  Log In
                </button>
              </Form>
            );
          }}
        />
      </div>
    </div>
  );
};

export default LogInForm;
