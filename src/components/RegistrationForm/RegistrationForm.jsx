import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { selectIsLoading } from "../../redux/auth/selectors";

const RegistrationForm = () => {
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={{ name: "", email: "", password: "", }} onSubmit={handleSubmit}>
            <Form className={css.form} autoComplete="off">
                <label htmlFor={nameId} className={css.label}>
                    Name
                    <Field type="text" name='name' id={nameId} className={css.field} />
                </label>
                <label htmlFor={emailId} className={css.label}>
                    Email
                    <Field type="email" name='email' id={emailId} className={css.field} />
                </label>
                <label htmlFor={passwordId} className={css.label}>
                    Password
                    <Field name='password' id={passwordId} className={css.field} />
                </label>
                <button type="submit" disabled={isLoading}>Register</button>
            </Form>
        </Formik>
    )
};

export default RegistrationForm;
