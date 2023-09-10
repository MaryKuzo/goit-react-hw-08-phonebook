import { Formik, ErrorMessage } from 'formik';
import {
  StyledForm,
  Item,
  FormBox,
  CloseButton,
} from './ContactForm.styled';
import { StyledButton } from 'GlobalStyles.styled';
import { notify, isContactDubled, schema } from '../utils/utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetContactsQuery } from 'redux/contacts/createApi';
import { useDispatch } from 'react-redux';
import { selector } from 'redux/contacts/modalSlice';
import PropTypes from 'prop-types';

export const ContactForm = ({
  mutator,
  initialFormValues,
  btn1,
  id,
  name,
}) => {
  const dispatch = useDispatch();

  const { data: contacts = [] } = useGetContactsQuery();

  const handleSubmit = async (values, { resetForm }) => {
    if (
      (isContactDubled(contacts, values, 'name') ||
        isContactDubled(contacts, values, 'number')) &&
      name === 'AddContact'
    ) {
      notify();
      return;
    }
    try {
      await mutator({ id, ...values });
      resetForm();
      dispatch(selector(false));
    } catch (error) {
      console.log(error);
      dispatch(selector(false));
    }
  };

  return (
    <FormBox>
      <ToastContainer />
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >

          <StyledForm>
            <label htmlFor="" style={{
              marginBottom: '10px',
              fontFamily: 'Ephesis',
              fontSize:'20px',
            }}>
              Name
              <Item type="text" name="name" />
              <ErrorMessage name="name" />
            </label>
            <label htmlFor="" style={{
              marginBottom: '10px',
              fontFamily: 'Ephesis',
              fontSize:'20px',
            }}>
              Number
              <Item type="tel" name="number" />
              <ErrorMessage name="number" />
            </label>
            <StyledButton type="submit">{btn1}</StyledButton>
          </StyledForm>
   
      </Formik>
      <CloseButton onClick={e => dispatch(selector(false))}>
       x
      </CloseButton>
    </FormBox>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object,
  contacts: PropTypes.array,
  mutator: PropTypes.func,
  initialFormValues: PropTypes.object,
  btn1: PropTypes.string,
  btn2: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
