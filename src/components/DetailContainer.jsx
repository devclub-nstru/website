import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function DetailContainer({ id, date, time, location, details, title }) {
  return (
    <Link to={`/events/${id}`} className="detail-container-link">
      <div className="detail-container">
        <div className="detail-item event-date">
          <p className="date-number">{date.split("-")[2]}</p>
          <p className="date-month">{new Date(date).toLocaleString("default", { month: "long" })}</p>
        </div>
        <div className="detail-item event-location">
          <div className="time-container">
            <CiClock2 />
            <p className="time">{time}</p>
          </div>
          <div className="location-container">
            <IoLocationOutline />
            <p className="location">{location}</p>
          </div>
        </div>
        <div className="detail-item event-description">
          <p className="event-heading">{title}</p>
          <p className="event-details">{details}</p>
        </div>
      </div>
    </Link>
  );
}

export default DetailContainer;
