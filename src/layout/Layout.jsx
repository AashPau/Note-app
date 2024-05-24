import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <main className="main">{children}</main>
      </div>
    </div>
  );
};
