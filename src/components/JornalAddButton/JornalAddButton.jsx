import CardButton from "../CartButton/CardButton";

import styles from "./JornalAddButton.module.scss";

function JornalAddButton() {
  return (
    <CardButton className={styles.journallAdd}>
      <img src="/public/plus.svg" alt="plus" />
      нове згадування
    </CardButton>
  );
}

export default JornalAddButton;
