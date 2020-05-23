import React from "react";
// libraries
import { Formik, Form, Field, ErrorMessage } from "formik";
// components
import { useFormikProps } from "./FormikProps";
import TextError from "./TextError";

const YouTubeForm = () => {
  // formik props
  const { initialValues, validationSchema, onSubmit } = useFormikProps();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" type="text" id="comments" name="comments" />
          {/* <ErrorMessage name="comments" component={TextError} /> */}
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {({ field, meta: { touched, error } }) => (
              <div>
                <input type="text" id="address" {...field} />
                {touched && error && <div className="error">{error}</div>}
              </div>
            )}
          </Field>
        </div>

        <button>Submit</button>
      </Form>
    </Formik>
  );
};

export default YouTubeForm;
