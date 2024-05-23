import "./Display.css";

export const Display = ({ display }) => {
  const { title, description } = display;
  return (
    <div className="card w-100">
      <div className="card-body">
        <h5 className="card-title text-center">{title || "Untitled"}</h5>
        <hr />
        <p className="card-text text-center">
          {description || "There should be sth here."}
        </p>
      </div>
    </div>
  );
};
