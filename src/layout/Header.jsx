import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../features/users/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);

  const handleOnLogOutClick = () => {
    dispatch(setUser({}));
    navigate("/signin");
  };

  const renderLoggedInLinks = () => (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Link to="/dashboard" className="nav-link">
          <p className="shadow-ld border border-2 border-primary p-2 rounded">
            Dashboard
          </p>
        </Link>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        onClick={handleOnLogOutClick}
      >
        <Link to="/logout" className="nav-link">
          <p className="shadow-ld border border-2 border-primary p-2 rounded">
            LogOut
          </p>
        </Link>
      </div>
    </>
  );

  const renderLoggedOutLinks = () => (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Link to="/signin" className="nav-link">
          <p className="shadow-ld border border-2 border-primary p-2 rounded">
            LogIn
          </p>
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Link to="/" className="nav-link">
          <p className="shadow-ld border border-2 border-primary p-2 rounded">
            SignUp
          </p>
        </Link>
      </div>
    </>
  );

  return (
    <div className="d-flex justify-content-around p-5">
      <h1>Notes-app</h1>
      <div className="ms-auto d-flex gap-3">
        {user?._id ? renderLoggedInLinks() : renderLoggedOutLinks()}
      </div>
    </div>
  );
};

export default Header;
