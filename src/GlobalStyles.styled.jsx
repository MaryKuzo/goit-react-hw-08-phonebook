import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b4e62;
  transition: 800ms;
  :hover {
    text-decoration: underline;
    color: black;
  }
`;

export const StyledButton = styled(Button)`
  min-width: 100px;
  background-color: black;
  border-radius: 30px;
  color: #c49f00;
  &:hover,
  :focus {
    background-color: #c49f00;
    color: black;
  }
`;

