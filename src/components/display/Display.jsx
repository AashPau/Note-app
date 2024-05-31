import "./Display.css";

export const Display = ({ display }) => {
  const { title, description } = display;
  return (
    <div className="card w-100  border border-2 shadow-lg">
      <div className="card-body">
        <h5 className="card-title text-center fs-3">{title || "Untitled"}</h5>
        <hr />
        <p className="card-text text-center fs-4 ">
          {description || "There should be sth here."}
        </p>
      </div>
    </div>
  );
};
