import styled from '@emotion/styled';
import { Form, Field } from 'formik';


export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid wheat;
  border-radius: 6px;
  padding: 20px;


`;
export const Item = styled(Field)`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 30px;
  background-color: wheat;
  margin-top: 10px;
  height: 30px;
`;

export const FormBox = styled.div`
  /* position: relative; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
display: flex;
align-items: center;
    justify-content: center;
border-style: none;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 30px;
  color: #c49f00;
  &:hover,
  :focus {
    background-color: #c49f00;
    color: black;
  }
`;
