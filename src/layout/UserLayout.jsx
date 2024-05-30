import { Header } from "./Header";
import { AuthRoute } from "../components/auth/AuthRoute";
import { useSelector } from "react-redux";

export const UserLayout = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      <Header />
      <div>
        <main className="main">{children}</main>
      </div>
    </AuthRoute>
  );
};
