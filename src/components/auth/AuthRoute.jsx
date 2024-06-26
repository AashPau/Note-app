import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  return user?._id ? children : <Navigate to="/signin" />;
};
