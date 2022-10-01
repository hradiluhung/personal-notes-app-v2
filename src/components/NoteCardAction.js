import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FiTrash } from "react-icons/fi";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import ActionContext from "../contexts/ActionContext";

const NoteCardAction = ({ noteId, noteIsArchived, openModal }) => {
  const { onArchiveHandler, onUnarchiveHandler } = useContext(ActionContext);

  return (
    <div className="note__action">
      <div className="note__action_buttons">
        {noteIsArchived ? (
          <div
            className="note__action_unarchive"
            onClick={() => onUnarchiveHandler(noteId)}
          >
            <MdOutlineUnarchive size="70%" />
          </div>
        ) : (
          <div
            className="note__action_archive"
            onClick={() => onArchiveHandler(noteId)}
          >
            <MdOutlineArchive size="70%" />
          </div>
        )}

        <div className="note__action_delete" onClick={openModal}>
          <FiTrash size="50%" />
        </div>
      </div>
    </div>
  );
};

NoteCardAction.propTypes = {
  noteId: PropTypes.string.isRequired,
  noteIsArchived: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default NoteCardAction;
