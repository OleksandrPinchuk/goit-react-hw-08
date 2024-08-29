import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const initialValues = {
    name: '',
    number: '',
};

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'min 3').max(20, 'max 20').required('required'),
    number: Yup.number().min(3, 'min 3').required('required'),
});   

const ContactForm = () => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const phoneFieldId = useId();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                dispatch(addContact({
                    name: values.name,
                    number: values.number,
                }));
                actions.resetForm()
            }}>
            <Form className={css.form}>
                <label htmlFor={nameFieldId} className={css.label}>Name:</label>
                <Field type="text" name='name' id={nameFieldId} className={css.field}  />
                <ErrorMessage name='name' component='span' />
                <label htmlFor={phoneFieldId} className={css.label}>Phone:</label>
                <Field type="text" name='number' id={phoneFieldId} className={css.field} />
                <ErrorMessage name='number' component='span' />
                <button type='submit' className={css.button}>Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm