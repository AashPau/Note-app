import { useState } from "react";
import { AddContent } from "../components/addContent/AddContent";
import { Display } from "../components/display/Display";
import "./Home.css";

const Home = () => {
  const [panel, setPanel] = useState("display");

  //show add notes form on click
  const handleOnPlusClick = () => {
    setPanel("form");
  };

  //show notes on click on side panel
  const handleOnNotesClick = () => {
    setPanel("display");
  };

  return (
    <div className="container rounded mt-5">
      <div className="row">
        <div className="col bg-success rounded p-5">
          {/* list of notes */}
          <div className="d-flex">
            <h1>Notes</h1>
            <div className="ms-auto">
              <h1>
                <i className="fa-solid fa-plus" onClick={handleOnPlusClick}></i>
              </h1>
            </div>
          </div>

          <hr />
          <div
            className="noteHead border border-dark rounded p-3 d-flex mb-2"
            onClick={handleOnNotesClick}
          >
            <h4>Note Heading</h4>
          </div>
          <div className="noteHead border border-dark rounded p-3 d-flex mb-2">
            <h4>Note Heading</h4>
          </div>
          <div className="noteHead border border-dark rounded p-3 d-flex mb-2">
            <h4>Note Heading</h4>
          </div>
        </div>
        <div className="col bg-info d-flex p-4 rounded justify-content-center">
          {/* display notes or form */}

          {panel === "display" ? <Display /> : <AddContent />}
        </div>
      </div>
    </div>
  );
};

export default Home;
