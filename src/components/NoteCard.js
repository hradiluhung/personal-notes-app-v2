import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { showFormattedDate } from "../utils/network-data";
import DeleteModal from "./DeleteModal";
import NoteCardAction from "./NoteCardAction";

const NoteCard = ({ note }) => {
  const { locale } = useContext(LocaleContext);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="note__wrapper">
        <div className="note__card">
          <Link to={`/note/${note.id}`} className="note__title">
            {note.title}
          </Link>
          <p className="note__date">
            {showFormattedDate(note.createdAt, locale)}
          </p>
          <p className="note__body">{note.body}</p>
          <NoteCardAction
            noteId={note.id}
            noteIsArchived={note.archived}
            openModal={openModalHandler}
          />
        </div>
      </div>

      {isOpen && <DeleteModal openModal={openModalHandler} noteId={note.id} />}
    </>
  );
};

export default NoteCard;
