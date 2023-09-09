import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  path }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted
  return shouldRedirect ? <Navigate to={`${path}`} /> : children;
}
