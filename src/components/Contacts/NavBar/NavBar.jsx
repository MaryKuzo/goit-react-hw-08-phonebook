import { useCreateContactMutation } from 'redux/contacts/createApi';
import { BackDrop } from '../Modal/Modal.styled';
import { PhoneBookHeader, PhoneBookBox } from './NavBar.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { selector } from 'redux/contacts/modalSlice';
import PropTypes from 'prop-types';
import { RiUserAddLine } from 'react-icons/ri';
import { StyledButton } from 'GlobalStyles.styled';

export const NavBar = () => {
  const modalSelector = useSelector(state => state.modal.selector);
  const dispatch = useDispatch();
  const [addContact] = useCreateContactMutation();

  const addContactModal = e => {
    dispatch(selector('add'));
  };

  return (
    <PhoneBookBox>
      <PhoneBookHeader>Phonebook</PhoneBookHeader>
      {!modalSelector && (

        <StyledButton
          variant="contained"
          endIcon={<RiUserAddLine />}
          color="primary"
          onClick={addContactModal}
        >
          Add Contact
        </StyledButton>
      )}
      {modalSelector === 'add' && (
        <BackDrop>
          <ContactForm
            mutator={addContact}
            initialFormValues={{ name: '', number: '' }}
            btn1="Add Contact"
            name="AddContact"
          />
        </BackDrop>
      )}
    </PhoneBookBox>
  );
};

NavBar.propTypes = {
  modalSelector: PropTypes.string,
};
