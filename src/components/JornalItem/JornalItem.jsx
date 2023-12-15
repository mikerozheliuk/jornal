import "./JornalItem.scss";

function JornalItem({ title, text, date }) {
  const formatedDate = new Intl.DateTimeFormat("ua-UA").format(date);
  return (
    <>
      <h2 className="jornal-item__header">{title}</h2>
      <h2 className="jornal-item__body">
        <div className="jornal-item__date">{formatedDate}</div>
        <div className="jornal-item__text">{text}</div>
      </h2>
    </>
  );
}

export default JornalItem;
