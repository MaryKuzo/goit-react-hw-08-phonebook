import { StyledContList } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/filterSlice';
import { useGetContactsQuery } from 'redux/contacts/createApi';
import PropTypes from 'prop-types';

import { ContactItem } from '../ContactItems/ContactItems';
import { useMemo } from 'react';

export const Contacts = () => {
  const filter = useSelector(getFilter);
  const { data: contacts = [] } = useGetContactsQuery();

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });
  }, [contacts, filter]);

  const shownContacts = filter !== '' ? filteredContacts : contacts;

  return (
    <StyledContList>
      {shownContacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </StyledContList>
  );
};

Contacts.propTypes = {
  filteredContacts: PropTypes.array,
  filter: PropTypes.string,
  contacts: PropTypes.array,
};
