import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { selectIsLoading } from '../../redux/contacts/selectors.js';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Your contacts</h2>
      <ContactForm />
      <SearchBox />
      <p>{isLoading && "Request in progress..."}</p>
      <ContactList />
    </div>
  );
};

export default ContactsPage; 
