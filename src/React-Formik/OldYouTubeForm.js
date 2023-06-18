import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function OldYouTubeForm() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = values => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required...."),
    email: Yup.string().email("Invalid Email Brother").required("Required...."),
    channel: Yup.string().required("Required...."),
  });
  const validate = values => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.channel) {
      errors.channel = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="channel">Channel Name</label>
          <br />
          <input
            type="text"
            id="channel"
            name="channel"
            value={formik.values.channel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div>{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
export default OldYouTubeForm;
