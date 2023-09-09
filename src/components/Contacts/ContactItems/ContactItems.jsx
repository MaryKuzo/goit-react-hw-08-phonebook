import {
  StyledItem,

  TextBox,
  DeleteIcon,

  PreDeleteIcon,

  DeleteOnLoadIcon,
} from './ContactItems.styled';

import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/createApi';

import PropTypes from 'prop-types';


export const ContactItem = ({ contact }) => {

  const { name, number, id } = contact;
  const [show, setShow] = useState(false);

  const [deleteContact, { isLoading }] = useDeleteContactMutation();



  const onEnter = e => {
    e.currentTarget.classList.add('vissible');
    e.currentTarget.id === contact.id && setShow(true);
  };

  const handleDelete = e => {
    deleteContact(e.currentTarget.parentElement.id);
  };

  const onBlur = e => {
    document
      .querySelectorAll('.vissible')
      .forEach(n => n.classList.remove('vissible'));
    setShow(false);
  };

  return (
    <>
      <StyledItem
        id={id}
        onClick={onEnter}
        onFocus={onEnter}
        onBlur={onBlur}
        tabIndex={1}
      >
        <TextBox>
          <span>{name}</span>
          <span>{number}</span>
        </TextBox>
        {isLoading ? (
          <DeleteOnLoadIcon />
        ) : show ? (
          <DeleteIcon onClick={handleDelete} />
        ) : (
          <PreDeleteIcon />
        )}
      </StyledItem>

    </>
  );
};

ContactItem.propTypes = {
  filteredContacts: PropTypes.array,
  contacts: PropTypes.array,
  modalSelector: PropTypes.string,
  modalIdSelector: PropTypes.number,
};
