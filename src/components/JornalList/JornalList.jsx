import CardButton from "../CartButton/CardButton";
import JornalItem from "../JornalItem/JornalItem";

import "./JornalList.scss";

function JornalList({ items }) {
  if (items.length === 0) {
    return <p>Записів поки нема, добав першу</p>;
  }

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      {items.sort(sortItems).map((el) => (
        <CardButton key={el.id}>
          <JornalItem title={el.title} text={el.text} date={el.date} />
        </CardButton>
      ))}
    </>
  );
}

export default JornalList;
