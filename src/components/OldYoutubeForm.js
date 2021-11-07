import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
};

const onSubmit = (values) => {
    console.log("form data", values);
};

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
});

const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    console.log(formik.values);

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <div className="form-control">
                <input type="text" id="name" name="name" {...formik.getFieldProps("name")} />
                {formik.errors.name && formik.touched.name ? (
                    <div className="error">{formik.errors.name}</div>
                ) : null}
            </div>

            <label htmlFor="email">Email</label>
            <div className="form-control">
                <input type="email" id="email" name="email" {...formik.getFieldProps("email")} />
                {formik.errors.email && formik.touched.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>

            <label htmlFor="channel">Name</label>
            <div className="form-control">
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    {...formik.getFieldProps("channel")}
                />
                {formik.errors.channel && formik.touched.channel ? (
                    <div className="error">{formik.errors.channel}</div>
                ) : null}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default OldYoutubeForm;
