import "./NoteHeader.css";

export const NoteHeader = ({ handleOnNotesClick }) => {
  return (
    <div
      className="noteHead border border-dark rounded p-3 d-flex mb-2"
      onClick={handleOnNotesClick}
    >
      <h4>Note Heading</h4>
    </div>
  );
};
