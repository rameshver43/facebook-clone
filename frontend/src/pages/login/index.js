import React, { useState } from "react";
import "./style.css";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/loginInput";
import * as Yup from "yup";
const loginInfo = {
  email: "",
  password: "",
};
function Login() {
  const [login, setLogin] = useState(loginInfo);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address or phone number is required")
      .email("Must be a valid email")
      .max(100),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className="login">
      <div className="login-left">
        <img src="\icons\facebook.svg" alt="facebook" />
        <span>
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="login-right">
        <div className="login-right-top">
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
          >
            {(formik) => (
              <Form className="login-form">
                <LoginInput
                  type="text"
                  placeholder="Email address or phone number"
                  name="email"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleLoginChange}
                  bottom
                />
                <button type="submit" className="blue-btn">
                  Log in
                </button>
              </Form>
            )}
          </Formik>
          <div className="forgot-link">
            <Link to="/forgot">Forgotten password?</Link>
          </div>
          <div className="login-splitter"></div>
          <div className="signup-btn-wrap">
            <button className="green-btn">Create new account</button>
          </div>
        </div>
        <div className="login-right-bottom">
          <Link to="/" className="login-right-bottom-heading-link">
            <b>Create a Page</b>
          </Link>
          {" for a celebrity, brand or business."}
        </div>
        <div className="register"></div>
        <footer className="login-footer">
          <Link to="/">Home</Link>
        </footer>
      </div>
    </div>
  );
}

export default Login;
