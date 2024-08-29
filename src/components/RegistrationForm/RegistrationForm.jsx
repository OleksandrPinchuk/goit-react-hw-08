import { Field, Form, Formik } from "formik";
import { useId } from "react";

const RegisterForm = ({ submit }) => {
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        submit(values);
        actions.resetForm();
    };

    return (
        <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor={nameId}>name</label>
                <Field name='name' id={nameId} />
                <label htmlFor={emailId}>email</label>
                <Field name='email' id={emailId} />
                <label htmlFor={passwordId}>password</label>
                <Field name='password' id={passwordId} />
                <button type="submit">register</button>
            </Form>
        </Formik>
    )
};

export default RegisterForm;
  // const dispatch = useDispatch();

  // const handleSubmit = (values, { resetForm }) => {
  //   dispatch(register(values));
  //   resetForm();
  // };
