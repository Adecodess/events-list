import React, { useState,useEffect } from "react";
import Events from "./Events";
import event from "./data";
import Loading from "./Loading";
function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    setTimeout(() => setLoading(false),2000)
    
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }


  const removeEvents = (id) => {
    const newEvents = events.filter((list) => list.id !== id);
    setEvents(newEvents);
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>event of this week</h2>
          <div className="underline"></div>
        </div>
        <article>
          <Events events={events} removeEvents={removeEvents} />
          <button className="view-btn" onClick={() => setEvents(event)}>
            view full event
          </button>

          {/* {events && <Events />} */}
        </article>
      </section>
    </main>
  );
}

export default App;
