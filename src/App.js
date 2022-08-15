import Logo from "./components/Logo/Logo";
import Checkbox from "./components/Checkbox/Chceckbox";
import Button from "./components/Buttton/Button";
import "./styles.css";
import Ticket from "./components/Ticket/Ticket";

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
        <section className="tickets">
          <ul className="tickets__filters filters">
            <li className="filters__item">
              <Button>Самый дешевый</Button>
            </li>
            <li className="filters__item">
              <Button>Самый быстрый</Button>
            </li>
            <li className="filters__item">
              <Button>Оптимальный</Button>
            </li>
          </ul>

          <ul>
            <li>
              <Ticket airline={{}} price="13 400 ₽" />
            </li>
            <li>
              <Ticket airline={{}} />
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
