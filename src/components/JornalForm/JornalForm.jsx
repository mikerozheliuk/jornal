import { useState } from "react";
import Button from "../Button/Button";

import "./JornalForm.scss";

function JornalForm({ onSubmit }) {
  const [formValidState, setformValidState] = useState({
    title: true,
    post: true,
    date: true,
  });

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setformValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setformValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.post?.trim().length) {
      setformValidState((state) => ({ ...state, post: false }));
      isFormValid = false;
    } else {
      setformValidState((state) => ({ ...state, post: true }));
    }
    if (!formProps.date) {
      setformValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setformValidState((state) => ({ ...state, date: true }));
    }

    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
  };

  return (
    <form className="jornal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" style={{ border: formValidState.title ? undefined : "1px solid red" }} />
      <input type="date" name="date" style={{ border: formValidState.date ? undefined : "1px solid red" }} />
      <input type="text" name="tag" />
      <textarea
        name="post"
        id=""
        cols="30"
        rows="10"
        style={{ border: formValidState.post ? undefined : "1px solid red" }}
      ></textarea>
      <Button text="Save" />
    </form>
  );
}

export default JornalForm;
