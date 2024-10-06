import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations.js';
import { selectFilteredContacts } from '../../redux/filters/selectors.js';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    };

    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
            ))}
        </ul>
    )
};

export default ContactList