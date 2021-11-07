import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};

const onSubmit = (values) => {
    console.log("form data", values);
};

const validate = (values) => {
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name = "this field is required"
    let errors = {};

    if (!values.name) {
        errors.name = "Required";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.test(
            values.email
        )
    ) {
        errors.email = "Invalid email format";
    }

    if (!values.channel) {
        errors.channel = "Required";
    }

    return errors;
};

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
});

const YoutubeForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <label htmlFor="name">Name</label>
                <div className="form-control">
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" />
                </div>

                <label htmlFor="email">Email</label>
                <div className="form-control">
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" />
                </div>

                <label htmlFor="channel">Name</label>
                <div className="form-control">
                    <Field type="text" id="channel" name="channel" />
                    <ErrorMessage name="channel" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;
