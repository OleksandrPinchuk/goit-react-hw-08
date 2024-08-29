import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectFilteredContacts, selectLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contactsOps';

const ContactList = () => {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
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
            {loading && <h2>loading..</h2>}
            {error && <h2>{error}</h2>}
            {contacts && contacts.map(contact => (
                <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
            ))}
        </ul>
    )
};

export default ContactList