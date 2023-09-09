import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";

export default function PrivateRoute({ children, path }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={`${path}`} />
}
