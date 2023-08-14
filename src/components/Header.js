import { useSelector , useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h2>React Redux Authentication</h2>
      {isAuth && (
        <nav>
          <ul>
            <li><button onClick={logoutHandler}>Logout</button></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
