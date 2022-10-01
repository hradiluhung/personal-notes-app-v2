import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddNoteInput from "../components/AddNoteInput";
import LocaleContext from "../contexts/LocaleContext";
import { addNote } from "../utils/network-data";
import { addNoteStrings } from "../utils/strings";

const AddNotePage = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onAddNoteHandler = async (note) => {
    addNote(note);
    navigate("/");
  };

  return (
    <section className="add-page">
      <h1 className="add-page__title">{addNoteStrings[locale].title}</h1>
      <AddNoteInput onAddNote={onAddNoteHandler} />
    </section>
  );
};

export default AddNotePage;
