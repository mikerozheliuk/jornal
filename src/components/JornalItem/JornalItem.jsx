import styles from "./JornalItem.module.scss";

function JornalItem({ title, text, date }) {
  const formatedDate = new Intl.DateTimeFormat("ua-UA").format(date);
  return (
    <>
      <h2 className={styles.jornalItem__header}>{title}</h2>
      <h2 className={styles.jornalItem__body}>
        <div className={styles.jornalItem__date}>{formatedDate}</div>
        <div className={styles.jornalItem__text}>{text}</div>
      </h2>
    </>
  );
}

export default JornalItem;
