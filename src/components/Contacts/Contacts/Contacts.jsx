
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

    <div style={{
      width: '480px',
      marginTop: '20px',
      borderRadius: '30px',
      border: '4px solid wheat',
      padding: '0',
    }}>
      {shownContacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </div>


  );
};

Contacts.propTypes = {
  filteredContacts: PropTypes.array,
  filter: PropTypes.string,
  contacts: PropTypes.array,
};
