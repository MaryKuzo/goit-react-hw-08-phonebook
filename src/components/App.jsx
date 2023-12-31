import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';
import { lazy, useEffect, Suspense } from 'react';
import * as authOperations from '../redux/auth/auth-operations';
import NavBar from './NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import { useNavigate } from 'react-router-dom';

export const Home = lazy(() => import('./views/HomeViews.jsx/HomeViews'));
export const Login = lazy(() => import('./views/LoginView/LoginView'));
export const ContactBook = lazy(() => import('./Contacts/PhoneBook'));
export const NotFound = lazy(() => import('./views/NotFound/NotFound'));
export const Register = lazy(() => import('./views/RegisterView/RegisterView'));

export const App = () => {
  const dispatch = useDispatch();
  const pendingUserData = useSelector(state => state.auth.pendingUserData);
  const currentPath = useSelector(state => state.auth.currentPath);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    currentPath && navigate(currentPath);
  }, [currentPath, dispatch, navigate]);

  return (
    <>
      {!pendingUserData && (
        <>
          <NavBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute path={'/'} restricted>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute path={'/'} restricted>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute path={'/login'}>
                    <ContactBook />
                  </PrivateRoute>
                }
              />
              <Route path='*' element={<NotFound/>}></Route>

            </Routes>
          </Suspense>
          <ToastContainer
            position="top-center"
            autoClose={2000} />

        </>
      )}
    </>
  );
};
