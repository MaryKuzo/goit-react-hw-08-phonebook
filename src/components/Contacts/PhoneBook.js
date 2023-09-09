
import { Container } from './PhoneBook.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { NavBar } from './NavBar/NavBar';


const PhoneBook = () => {
  return (
    <Container>
      <NavBar />
      <Filter />
      <Contacts />
    </Container>
  );
};
export default PhoneBook;
