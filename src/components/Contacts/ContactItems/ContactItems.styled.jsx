import styled from '@emotion/styled';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDeleteOutline, MdAutoDelete } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

export const ContactLi = styled.li`
  font-family: Pacifico, serif;
  font-size: 36px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 4px solid #eeb338;
  border-radius: 30px;
  width: 300px;
`;

export const ContactText = styled.p`
  font-family: Pacifico, serif;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const Button = styled.button`
  font-family: Pacifico, serif;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f1c40f;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #eeb338;
  }
`;


export const StyledItem = styled.li`
  display: flex;
  margin-top: 10px;
  transition: 500ms;
border-radius: 30px;
  justify-content: space-between;
  padding:20px;

  outline: none;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: rgba(204, 204, 204, 0.65);
  }

  }
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;
export const StyledButton = styled.button`
  display: block;
  width: 70px;
  margin-left: 5px;
  background-color: transparent;
  border-color: transparent;
  border-radius: 6px;
  color: transparent;
  transition: 500ms;
  visibility: hidden;
  &[disabled] {
    border-color: gray !important;
    background-color: #f5deb385 !important;
  }
  &.show {
    visibility: visible;
    transition: 500ms;
    background-color: #726885;
    color: wheat;
    border-color: black;

    &:hover,
    :focus {
      background-color: #7f7197;
      color: white;
      border-color: wheat;
    }
  }
`;
export const DeleteIcon = styled(AiFillDelete)`
  height: 30px;
  width: 30px;
  fill: rgba(245, 222, 179, 0.5);
  transition: 500ms;
  border-radius: 50%;

  &:hover,
  :focus {
    fill: white;
  }
`;
export const EditIcon = styled(FaUserEdit)`
  height: 30px;
  width: 30px;
  fill: rgba(245, 222, 179, 0.5);
  transition: 500ms;

  &:hover,
  :focus {
    fill: white;
  }
`;
export const PreDeleteIcon = styled(MdDeleteOutline)`
  height: 22px;
  width: 22px;
  fill: rgba(245, 222, 179, 0.5);
`;
export const PreEditIcon = styled(AiFillEdit)`
  height: 25px;
  width: 25px;
  fill: rgba(245, 222, 179, 0.5);
`;
export const DeleteOnLoadIcon = styled(MdAutoDelete)`
  height: 25px;
  width: 25px;
  fill: #fff;
  margin-right: 35px;
`;
