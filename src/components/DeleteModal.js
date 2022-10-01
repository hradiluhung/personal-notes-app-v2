import React, { useContext } from "react";
import ActionContext from "../contexts/ActionContext";

const DeleteModal = ({ noteId, openModal }) => {
  const { onDeleteHandler } = useContext(ActionContext);

  return (
    <div className="note__delete-modal">
      <div className="note__delete-modal_content">
        <div className="note__delete-modal_text">
          Are you sure want to delete this note ?
        </div>
        <div className="note__delete-modal_actions">
          <div className="note__delete-modal_cancel-button" onClick={openModal}>
            Cancel
          </div>
          <div
            className="note__delete-modal_delete-button"
            onClick={() => onDeleteHandler(noteId)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
