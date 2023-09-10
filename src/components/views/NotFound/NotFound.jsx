import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewContainer } from 'GlobalStyles.styled';
import { BiTimeFive, BiError } from 'react-icons/bi';
import phoneBG from '../../../images/phonebookBG.jpg';

const setTimer = 5;
const NotFoundView = () => {
  const [time, setTime] = useState(setTimer);

  let navigate = useNavigate();

  const ref = useRef(new Date().getTime() + setTimer * 1000);

  const timerId = useRef(
    setInterval(() => {
      setTime(Math.ceil((ref.current - Date.now()) / 1000));
    }, 1000)
  );
  useEffect(() => {
    if (time <= 0) {
      clearInterval(timerId.current);
      navigate('/');
    }
  }, [navigate, time]);
  console.log('time:', time);
  console.log('timerId:', timerId);

  return (
    <ViewContainer style={{ backgroundImage: `url(${phoneBG})` }}>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'wheat',
          padding: '50px',
          boxShadow: '2px 4px 8px 0px rgba(0,0,0,0.75)',
        }}
      >
        <p>
          <BiError style={{
            color: 'red',
            fontSize:'20px'
          }} /> <span style={{
            fontFamily: 'Ephesis,cursive',
            fontSize:'28px',
          }}>Page not found</span>,
          <Link to="/" style={{
            textDecoration: 'none',
             fontFamily: 'Ephesis,cursive',
            fontSize:'28px',
          }}>
            {' '}
            go to homepage
          </Link>
          <BiError
          style={{
            color: 'red',
            fontSize:'20px'
          }}/>
        </p>

        <p style={{
          display: 'flex',
          justifyContent:'center',
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'Ephesis,cursive',
          fontSize: '20px'
        }}>
          <BiTimeFive
          style={{
            color: '#daa520',
            fontSize:'20px'
          }}/>
          &nbsp;{`Redirecting in ${time} seconds`}&nbsp;
          <BiTimeFive
          style={{
            color: '#daa520',
            fontSize:'20px'
          }}/>
        </p>
      </div>
    </ViewContainer>
  );
};
export default NotFoundView;
