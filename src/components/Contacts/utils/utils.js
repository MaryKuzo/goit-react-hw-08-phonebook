import { toast } from 'react-toastify';
import * as yup from 'yup';

export const notify = () =>
  toast.warn('That NAME or NUMBER already exist', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });

export const isContactDubled = (arr, data, key) => {
  return arr.some(
    contact =>
      contact[key].toLocaleLowerCase() === data[key].toLocaleLowerCase()
  );
};


const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
export const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid').required(),
  number: yup
    .string()
    .max(12)
    .required(),
});
