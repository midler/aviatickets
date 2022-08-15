import * as React from "react";

const Ticket = ({ airline, link, price, className, children }) => {
  return (
    <article className="ticket">
      <a href={link} className="ticket__link">
        <b className="ticket__price">{price}</b>
        {airline.src ? (
          <img
            className="ticket__airline-img"
            src={airline.src}
            width={airline.width}
            height={airline.height}
            alt={airline.text}
          />
        ) : (
          ""
        )}
      </a>
      <dl>
        <div>
          <dt>MOW – HKT</dt>
          <dd>10:45 – 08:00</dd>
        </div>
        <div>
          <dt>В пути</dt>
          <dd>21ч 15м</dd>
        </div>
        <div>
          <dt>2 пересадки</dt>
          <dd>HKG, JNB</dd>
        </div>
      </dl>
      <dl>
        <div>
          <dt>MOW – HKT</dt>
          <dd>10:45 – 08:00</dd>
        </div>
        <div>
          <dt>MOW – HKT</dt>
          <dd>10:45 – 08:00</dd>
        </div>
        <div>
          <dt>MOW – HKT</dt>
          <dd>10:45 – 08:00</dd>
        </div>
      </dl>
    </article>
  );
};

Ticket.defaultProps = {
  price: "0"
};

export default Ticket;
