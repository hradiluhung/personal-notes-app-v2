import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { getNote, showFormattedDate } from "../utils/network-data";

const DetailNotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await getNote(id);
      setNote(data);
    };
    fetchNotes();
  }, []);

  return (
    <section className="detail-page">
      <h1 className="detail-page__title">{note.title}</h1>
      <p className="detail-page__date">{showFormattedDate(note.createdAt)}</p>
      <p className="detail-page__body">{note.body}</p>
      <BackButton />
    </section>
  );
};

export default DetailNotePage;
