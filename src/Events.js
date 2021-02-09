import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const Events = ({ events, removeEvents }) => {
  return (
    <>
      {events.map((list) => {
        const { id, event, date } = list;

        return (
          <section key={id} className="events">
            <h3>{event}</h3>
            <p>{date}</p>
            <div className="icon">
              <button className="btn" onClick={() => removeEvents(id)}>
                <FaTrashAlt />
              </button>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Events;
