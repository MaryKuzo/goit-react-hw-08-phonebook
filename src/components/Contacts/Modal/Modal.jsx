import { BackDrop } from './Modal.styled';
import {
  useEditContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/createApi';
import { ContactForm } from '../ContactForm/ContactForm';
import PropTypes from 'prop-types';

export const Modal = ({ id }) => {
  const [editContact, { isLoading }] = useEditContactMutation();
  const { data: contacts = [] } = useGetContactsQuery();
  const contact = contacts.find(c => c.id === id);

  isLoading && document.querySelector('body').classList.remove('fixed');
  return (
    <>
      <BackDrop>
        {contact && (
          <ContactForm
            mutator={editContact}
            initialFormValues={{ name: contact.name, number: contact.number }}
            btn1="Add Contact"
            id={contact.id}
            name="Add Contact"
          />
        )}
      </BackDrop>
    </>
  );
};

ContactForm.propTypes = {
  id: PropTypes.string,
};
