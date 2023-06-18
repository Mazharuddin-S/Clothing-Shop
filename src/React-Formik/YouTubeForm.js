import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import { TextError } from "./TextError";

function YoutubeForm() {
  const savedValues = {
    name: "Don",
    email: "don@gmail.com",
    channel: "LinkageYT",
    comments: "Welcome Don",
    address: "",
    social: { facebook: "", twitter: "" },
    phoneNumbers: ["", ""],
    phNumbers: [""],
  };

  let [formValues, setFormValues] = useState(null);
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: { facebook: "", twitter: "" },
    phoneNumbers: ["", ""],
    phNumbers: [""],
  };
  const onSubmit = (values, submitProps) => {
    console.log("submit props", submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required !!..."),
    email: Yup.string().email("Invalid Email Brother").required("Required...."),
    channel: Yup.string().required("Required...."),
    // textarea: Yup.string().required("write Something"),
    address: Yup.string().required("Address Required"),
  });
  const validateComments = value => {
    let error;
    if (!value) {
      error = "write anything please";
    }
    return error;
  };
  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      {formik => {
        console.log(formik);
        return (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div>
              <label htmlFor="channel">Channel Name</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" component={TextError} />
            </div>
            <div>
              <Field
                as="textarea"
                name="comments"
                placeholder="Write your Comment here"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
              {/* <ErrorMessage name="textarea">
          {errorMsg => <div className="Error">{errorMsg}</div>}
        </ErrorMessage> */}
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {props => {
                  let { field, form, meta } = props;

                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div
                          className=";
                Error"
                        >
                          {meta.error}
                        </div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div>
              <label name="facebook">Facebook</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div>
              <label name="twitter">Twitter</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div>
              <FieldArray name="phNumbers">
                {fieldArrayProps => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;

                  return (
                    <div>
                      <label htmlFor="phNumbers">List of Phone Numbers</label>
                      {phNumbers.map((phNumber, index) => {
                        return (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            <button onClick={() => push("")}>Add</button>
                            {index > 0 ? (
                              <button onClick={() => remove(index)}>
                                Remove
                              </button>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button type="button" onClick={() => formik.validateField("name")}>
              validateField
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              validateForm
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("email")}
            >
              setFieldTouched
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  comments: true,
                })
              }
            >
              SetTouched
            </button> */}
            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load saved daata
            </button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit Form
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
export default YoutubeForm;
