import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { homeStrings } from "../utils/strings";

const AddNoteButton = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="add-note-wrapper">
      <Link to="/add-note" className="add-note-button">
        <FiPlus />
        <p>{homeStrings[locale].addNote}</p>
      </Link>
    </div>
  );
};

export default AddNoteButton;
