import "./Display.css";

export const Display = () => {
  return (
    <div
      className="card"
      //  style={{ width: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">Note Heading</h5>
        <hr />
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div>
    </div>
  );
};