import { Form, Formik } from "formik";
import React from "react";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import s from "./Signup.module.css";
import * as Yup from "yup";

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <>
      <div className={s.wrapper}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <>
              <h1 className={s.title}>Sign Up</h1>
              {/* {console.log(formik.values)} */}
              <Form>
                <TextField label="First name" name="firstName" type="text" />
                <TextField label="Last name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <TextField
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                />
                <div className={s.buttonWrapper}>
                  <Button appearence="primary" type="submit">
                    Register
                  </Button>
                  <Button appearence="secondary" type="reset">
                    Reset
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};
