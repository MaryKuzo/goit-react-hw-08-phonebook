import { ViewContainer } from 'GlobalStyles.styled';
import { useSelector, useDispatch } from 'react-redux';
import { Greetings, TextBox } from './HomeViews.styled';
import phonebookBG from '../../../images/phonebookBG.jpg';
import { StyledButton } from '../../../GlobalStyles.styled';
import { useNavigate } from 'react-router-dom';
import { setPath } from 'redux/auth/auth-slice';
import authSelectors from 'redux/auth/auth-selectors';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);
  const onSignUp = () => {
    navigate('/register');
  };
  const onLogIn = () => {
    navigate('/login');
  };
  const onGettingStarted = () => {
    isLoggedIn && dispatch(setPath('/contacts'));
    navigate('/contacts');
  };
  return (
    <ViewContainer style={{ backgroundImage: `url(${phonebookBG})` }}>
      <TextBox>
        {isLoggedIn ? (
          <>
            <Greetings>
              🌟 Welcome <br />{userName.toUpperCase()}!
            </Greetings>
            <StyledButton variant="contained" onClick={onGettingStarted}>
              Getting Started
            </StyledButton>
          </>
        ) : (
          <>
            <Greetings>
              Welcome to Your Phonebook
              <br />
              Please, sign up or log in
            </Greetings>
            <StyledButton variant="contained" onClick={onLogIn}>
              Log In
            </StyledButton>
            <StyledButton variant="contained" onClick={onSignUp}>
              Sign Up
            </StyledButton>
          </>
        )}
      </TextBox>

    </ViewContainer>
  );
};
export default Home;
