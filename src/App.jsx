import { useEffect, useState } from "react";

import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/leftPanel/LeftPanel";

import Header from "./components/Header/Header";

import JornalList from "./components/JornalList/JornalList";
import JornalForm from "./components/JornalForm/JornalForm";
import JornalAddButton from "./components/JornalAddButton/JornalAddButton";

import "./App.css";

// const INITIAL_DATA = [
//   { id: 1, title: "Подготовка к обновлению курсов", text: "Сегодня провёл весь день за...", date: new Date() },

//   { id: 2, title: "Поход в годы", text: "Думал, что очень много време...", date: new Date() },

//   { id: 3, title: "Первая заметка", text: "Создал первую заметку, чтобы ...", date: new Date() },
// ];

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      );
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.getItem("data", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JornalAddButton />
        <JornalList items={items} />
      </LeftPanel>

      <Body>
        <JornalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
