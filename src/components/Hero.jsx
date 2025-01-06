import React /* useEffect, useState */ from "react";
import { Link } from "react-router-dom";
import /* getEvent */ "../services/eventService";
import formatDate from "../utils/formatDate";

function Hero() {
  //TODO: fetch event data
  /*const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await getEvent();
      if (data && data.length > 0) {
        setEvent(data[0]);
      }
    };

    fetchEvent();
  }, []);

  if (!event) {
    return <div>Loading...</div>;
  }*/

  return (
    <section className="container hero">
      <div className="main-event-details">
        <h1 className="event-name">{"NST Hackathon"}</h1>
        <p className="event-date">On {formatDate("2025-01-12")}</p>
        <Link to={`/events/${"nst-hackathon"}`} className="know-more-link">
          View details
        </Link>
      </div>
    </section>
  );
}

export default Hero;
