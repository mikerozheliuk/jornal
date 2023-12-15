import CardButton from "../CartButton/CardButton";

import "./JornalAddButton.scss";

function JornalAddButton() {
  return (
    <CardButton className="journall-add">
      <img src="/public/plus.svg" alt="plus" />
      нове згадування
    </CardButton>
  );
}

export default JornalAddButton;
