import "./NoteHeader.css";

export const NoteHeader = ({
  title = "Untitled",
  handleOnNotesClick,
  handleOnDelete,
}) => {
  return (
    <div
      className="bgSpecial border border-dark rounded p-3 d-flex mb-2"
      onClick={handleOnNotesClick}
    >
      <h4>{title}</h4>
      <div className="ms-auto d-flex align-items-center ">
        <i className="fa-solid fa-trash" onClick={handleOnDelete}></i>
      </div>
    </div>
  );
};
