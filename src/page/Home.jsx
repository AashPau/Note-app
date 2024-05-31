import { useEffect, useState } from "react";
import { AddContent } from "../components/addContent/AddContent";
import { Display } from "../components/display/Display";
import "./Home.css";
import { NoteHeader } from "../components/noteHeader/NoteHeader";
import {
  deleteOneNote,
  fetchNotes,
  fetchSingleNote,
} from "../helper/notesAxios";
import { UserLayout } from "../layout/UserLayout";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Home = () => {
  const [panel, setPanel] = useState("display");
  const [notes, setNotes] = useState([]);
  const [display, setDisplay] = useState({});
  const { user } = useSelector((state) => state.userInfo);
  const { _id } = user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchNotes(_id);
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchData();
  }, []); // Fetch data only on initial render

  //show add notes form on click
  const handleOnPlusClick = () => {
    setPanel("form");
  };
  //show notes on click on side panel
  const handleOnNotesClick = async (_id) => {
    setPanel("display");
    const { data } = await fetchSingleNote(_id);
    data ? setDisplay(data) : console.log("error");
  };

  const handleOnDelete = async (_id) => {
    const response = await deleteOneNote(_id);

    if (response?.status === "success") {
      toast[response.status](response.message);
      //remove the deleted note from the notes array
      setNotes(notes.filter((note) => note._id !== _id));
      setDisplay({});
    } else {
      console.log("error");
    }
  };

  const handleOnAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <UserLayout>
      <div className="container rounded">
        <div className="row">
          <div className="col border border-2 rounded p-5 noteList">
            {/* list of notes */}
            <div className="d-flex">
              <h1>Notes</h1>
              <div className="ms-auto">
                <h1>
                  <i
                    className="fa-solid fa-plus"
                    onClick={handleOnPlusClick}
                  ></i>
                </h1>
              </div>
            </div>

            <hr />
            <div className="overflow">
              {notes.map((note, i) => (
                <NoteHeader
                  key={i}
                  title={note.title}
                  handleOnDelete={() => handleOnDelete(note._id)}
                  handleOnNotesClick={() => handleOnNotesClick(note._id)}
                />
              ))}
            </div>
          </div>
          <div className="col border border-2 d-flex p-4 rounded justify-content-center">
            {/* display notes or form */}
            {panel === "display" ? (
              <Display display={display} />
            ) : (
              <AddContent onAddNote={handleOnAddNote} />
            )}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;
