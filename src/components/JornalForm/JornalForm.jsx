import { useState } from "react";
import cn from "classnames";

import Button from "../Button/Button";

import styles from "./JornalForm.module.scss";

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
    <form className={styles.jornalForm} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={cn(styles["input-title"], {
            [styles["invalid"]]: !formValidState.title,
          })}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="date" className={styles.formLabel}>
          <img src="/public/data.svg" alt="icons" />
          <span>Дата</span>
        </label>
        <input
          id="date"
          type="date"
          name="date"
          className={cn(styles["input"], {
            [styles["invalid"]]: !formValidState.date,
          })}
        />
      </div>

      <div className={styles.formRow}>
        <label htmlFor="tag" className={styles.formLabel}>
          <img src="/public/folder.svg" alt="icons" />
          <span>Мітка</span>
        </label>

        <input type="text" name="tag" id="tag" className={styles["input"]} />
      </div>

      <textarea
        name="post"
        id=""
        cols="30"
        rows="10"
        className={cn(styles["input"], {
          [styles["invalid"]]: !formValidState.post,
        })}
      ></textarea>
      <Button text="Save" />
    </form>
  );
}

export default JornalForm;
