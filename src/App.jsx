import "./App.css";

import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import LeftPanel from "./layouts/leftPanel/LeftPanel";
import CardButton from "./components/CartButton/CardButton";
import JornalItem from "./components/JornalItem/JornalItem";
import JornalList from "./components/JornalList/JornalList";
import JornalForm from "./components/JornalForm/JornalForm";
import JornalAddButton from "./components/JornalAddButton/JornalAddButton";

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Сегодня провёл весь день за...",
      date: new Date(),
    },

    {
      title: "Поход в годы",
      text: "Думал, что очень много време...",
      date: new Date(),
    },

    {
      title: "Первая заметка",
      text: "Создал первую заметку, чтобы ...",
      date: new Date(),
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JornalAddButton />
        <JornalList>
          <CardButton>
            <JornalItem title={data[0].title} text={data[0].text} date={data[0].date} />
          </CardButton>

          <CardButton>
            {" "}
            <JornalItem title={data[1].title} text={data[1].text} date={data[1].date} />{" "}
          </CardButton>

          <CardButton>
            {" "}
            <JornalItem title={data[2].title} text={data[2].text} date={data[2].date} />
          </CardButton>
        </JornalList>
      </LeftPanel>

      <Body>
        <JornalForm />
      </Body>
    </div>
  );
}

export default App;
