import React from "react";
// libraries
import { Formik, Form, Field, ErrorMessage } from "formik";

// Formik props
import { useFormikProps } from "./FormikProps";
const { initialValues, validationSchema, onSubmit } = useFormikProps();

const YouTubeForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    <Form>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-Mail</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" />
      </div>

      <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" />
      </div>

      <div className="form-control">
        <label htmlFor="comments">Comments</label>
        <Field as="textarea" type="text" id="comments" name="comments" />
        <ErrorMessage name="channel" />
      </div>

      <div className="form-control">
        <label htmlFor="comments">Address</label>
        <Field name="address">
          {({ field, meta: { touched, error } }) => (
            <div>
              <input type="text" id="address" {...field} />
              {touched && error && <div>{error}</div>}
            </div>
          )}
        </Field>
      </div>

      <button>Submit</button>
    </Form>
  </Formik>
);

export default YouTubeForm;
