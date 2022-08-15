import Logo from "./components/Logo/Logo";
import Checkbox from "./components/Checkbox/Chceckbox";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="visually-hidden">Сайт по подбору авиабилетов</h1>
        <Logo />
      </header>
      <main className="main-container">
        <section className="filter">
          <h2 className="filter__title">Количество пересадок</h2>
          <form action="" className="filter__form">
            <Checkbox className="filter-checkbox">Все</Checkbox>
            <Checkbox className="filter-checkbox">Без пересадок</Checkbox>
            <Checkbox className="filter-checkbox">1 пересадка</Checkbox>
            <Checkbox className="filter-checkbox">2 пересадка</Checkbox>
            <Checkbox className="filter-checkbox">3 пересадки</Checkbox>
          </form>
        </section>
      </main>
    </div>
  );
}
