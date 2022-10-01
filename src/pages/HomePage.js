import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AddNoteButton from "../components/AddNoteButton";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { ActionProvider } from "../contexts/ActionContext";
import LocaleContext from "../contexts/LocaleContext";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/network-data";
import { homeStrings } from "../utils/strings";

const HomePage = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const [isLoading, setIsLoading] = useState(true);

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await getActiveNotes();

      setActiveNotes(data);
      setIsLoading(false);
    };

    fetchNotes();
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    setActiveNotes(data);
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id);

    const { data } = await getActiveNotes();
    setActiveNotes(data);
  };

  const filteredNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="home-page">
      <h1 className="home-page__title">
        {" "}
        {homeStrings[locale].greeting + user.name}!
      </h1>
      <p className="home-page__text">
        {homeStrings[locale].text} <b>{homeStrings[locale].activeNotes}</b>
      </p>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <ActionProvider value={{ onDeleteHandler, onArchiveHandler }}>
        <NotesList notes={filteredNotes} isLoading={isLoading} />
      </ActionProvider>
      <AddNoteButton />
    </section>
  );
};

export default HomePage;
