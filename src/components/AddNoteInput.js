import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { addNoteStrings } from "../utils/strings";

const AddNoteInput = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { locale } = useContext(LocaleContext);

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    onAddNote({ title, body });
  };

  return (
    <form className="form" onSubmit={onSubmitEventHandler}>
      <label className="form__field">
        <input
          type="text"
          className="form__input form__input-title"
          placeholder={addNoteStrings[locale].titleInput}
          value={title}
          onChange={onTitleChangeHandler}
          required
        />
      </label>
      <label className="form__field form__field-textarea">
        <textarea
          type="text"
          className="form__input"
          placeholder={addNoteStrings[locale].textInput}
          value={body}
          onChange={onBodyChangeHandler}
          required
        />
      </label>
      <div className="form__actions">
        <button
          type="submit"
          className="form__add-button"
          style={{ marginBottom: "12px" }}
        >
          {addNoteStrings[locale].addNote}
        </button>
        <Link to="/" className="form__cancel-button">
          {addNoteStrings[locale].cancel}
        </Link>
      </div>
    </form>
  );
};

AddNoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default AddNoteInput;
