import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { ActionProvider } from "../contexts/ActionContext";
import LocaleContext from "../contexts/LocaleContext";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/network-data";
import { archivedNotesStrings } from "../utils/strings";

const ArchivedNotesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const [isLoading, setIsLoading] = useState(true);

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await getArchivedNotes();

      setArchivedNotes(data);
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

    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
  };

  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);

    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
  };

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archived-notes-page">
      <h1 className="archived-notes-page__title">
        {archivedNotesStrings[locale].title}
      </h1>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <ActionProvider value={{ onDeleteHandler, onUnarchiveHandler }}>
        <NotesList notes={filteredNotes} isLoading={isLoading} />
      </ActionProvider>
    </section>
  );
};

export default ArchivedNotesPage;
