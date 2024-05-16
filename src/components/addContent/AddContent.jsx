import "./AddContent.css";

export const AddContent = () => {
  return (
    <form className="mt-3">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Heading"
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Description"
        ></textarea>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
