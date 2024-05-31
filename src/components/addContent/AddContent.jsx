import { useRef } from "react";
import "./AddContent.css";
import { postNewNote } from "../../helper/notesAxios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const AddContent = ({ onAddNote }) => {
  const titleRef = useRef("");
  const descriptionRef = useRef("");

  const { user } = useSelector((state) => state.userInfo);
  const { _id } = user;
  console.log({ _id });
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    // Check for empty notes
    if (!title.trim() && !description.trim()) {
      return alert("Please write something to submit");
    }

    const formData = {
      title,
      description,
      _id,
    };

    const response = await postNewNote(formData);
    if (response?.status) {
      toast[response.status](response.message);
      // If the note is added successfully, invoke the onAddNote function passed from the parent
      onAddNote(response.data);
    } else {
      toast[500]("Server error");
    }

    // Clear form fields after submission
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit} className="mt-3">
      <div className="mb-3">
        <input
          type="text"
          ref={titleRef}
          className="form-control"
          id="title"
          placeholder="Title"
          defaultValue="Untitled"
        />
      </div>
      <div className="mb-3">
        <textarea
          ref={descriptionRef}
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
