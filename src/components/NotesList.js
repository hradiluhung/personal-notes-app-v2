import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { notesListStrings } from "../utils/strings";
import NoteCard from "./NoteCard";

const NotesList = ({ notes, isLoading }) => {
  const { locale } = useContext(LocaleContext);

  if (isLoading) {
    return <div className="loading-section">Loading...</div>;
  }

  if (!notes.length > 0) {
    return (
      <div className="notes-list_empty">{notesListStrings[locale].text}</div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <NoteCard key={note.id} note={note} />;
      })}
    </div>
  );
};

export default NotesList;
