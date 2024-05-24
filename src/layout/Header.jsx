export const Header = () => {
  return (
    <div className="d-flex justify-content-around p-5">
      <h1>Notes-app</h1>

      <div className="ms-auto d-flex gap-3">
        <div className="d-flex align-items-center justify-content-center">
          <p>LogIn</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p>SignUp</p>
        </div>
      </div>
    </div>
  );
};
