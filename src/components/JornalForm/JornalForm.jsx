import { useState } from "react";
import Button from "../Button/Button";

import "./JornalForm.scss";

function JornalForm() {
  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    setInputData(event.target.value);
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formProps);
  };

  return (
    <form className="jornal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" value={inputData} onChange={inputChange} />
      <textarea name="post" id="" cols="30" rows="10"></textarea>
      <Button text="Save" />
    </form>
  );
}

export default JornalForm;
