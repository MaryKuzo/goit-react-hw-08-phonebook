import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import defaultAvatar from "./icon.png";
import * as authOperations from '../../redux/auth/auth-operations'

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="" width='40' />
      <span>Welcome, { name }</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </button>
    </div>
  )
}
