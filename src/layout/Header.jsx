export const Header = () => {
  return (
    <div className="d-flex justify-content-around p-5">
      <h1>Notes-app</h1>

      <div className="ms-auto d-flex gap-3">
        <div className="d-flex align-items-center justify-content-center">
          <p className="shadow-ld border p-2 rounded">LogIn</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p className="shadow-ld border p-2 rounded">SignUp</p>
        </div>
      </div>
    </div>
  );
};
