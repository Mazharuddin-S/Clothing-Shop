import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "../React-Formik/FormikControl";

function FormikContainer() {
  const initialValues = { email: "", comments: "" };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email Mandatory"),
    comments: Yup.string().required("Please Give Feedback"),
  });
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => {
          return (
            <Form>
              <FormikControl
                control="input"
                label="Email"
                name="email"
                type="email"
              />
              <FormikControl
                control="textarea"
                label="Comments"
                name="comments"
                type="text"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikContainer;
