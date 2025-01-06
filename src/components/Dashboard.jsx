import React, { useState } from "react";
import { MdEventNote } from "react-icons/md";
import { GiSwordWound } from "react-icons/gi";
import { FaFlagCheckered } from "react-icons/fa";
import Events from "./Events";
import Clans from "./Clans";
import Clubs from "./Clubs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [eventFilter, setEventFilter] = useState("upcoming");

  const events = [
    {
      id: 1,
      type: "upcoming",
      date: "2025-01-01",
      time: "10:00 AM - 12:00 PM",
      location: "Main Auditorium",
      heading: "Techathon",
      details: "An exciting event about technology and innovation.",
    },
    {
      id: 2,
      type: "ongoing",
      date: "2024-12-30",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Hall",
      heading: "Web Dev Bootcamp",
      details: "A workshop on modern web development practices.",
    },
    {
      id: 3,
      type: "past",
      date: "2024-12-25",
      time: "9:00 AM - 11:00 AM",
      location: "Campus Grounds",
      heading: "Christmans Celebration",
      details: "A Christmas celebration for all students and staff.",
    },
    {
      id: 4,
      type: "ongoing",
      date: "2024-12-30",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Hall",
      heading: "Web Dev Bootcamp",
      details: "A workshop on modern web development practices.",
    },
    {
      id: 5,
      type: "past",
      date: "2024-12-24",
      time: "9:00 AM - 11:00 AM",
      location: "Campus Grounds",
      heading: "Christmans Celebration",
      details: "A Christmas celebration for all students and staff.",
    },
    {
      id: 6,
      type: "upcoming",
      date: "2024-12-15",
      time: "9:00 AM - 11:00 AM",
      location: "Campus Grounds",
      heading: "Christmans Celebration",
      details: "A Christmas celebration for all students and staff.",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "events":
        return <Events filter={eventFilter} events={events} />;
      case "clubs":
        return <Clubs />;
      case "clans":
        return <Clans />;
      default:
        return <p>Select an option from the sidebar.</p>;
    }
  };

  return (
    <div className="dashboard section-gap">
      <div className="dashboard-sidebar">
        <ul>
          <li
            className={activeTab === "events" ? "active" : ""}
            onClick={() => setActiveTab("events")}
          >
            <div className="dashboard-item">
              <MdEventNote />
              <span className="dashboard-text">Events</span>
            </div>
            {activeTab === "events" && (
              <ul className="subsection">
                <li
                  className={eventFilter === "upcoming" ? "active" : ""}
                  onClick={() => setEventFilter("upcoming")}
                >
                  Upcoming
                </li>
                <li
                  className={eventFilter === "ongoing" ? "active" : ""}
                  onClick={() => setEventFilter("ongoing")}
                >
                  Ongoing
                </li>
                <li
                  className={eventFilter === "past" ? "active" : ""}
                  onClick={() => setEventFilter("past")}
                >
                  Past
                </li>
              </ul>
            )}
          </li>
          <li
            className={activeTab === "clubs" ? "active" : ""}
            onClick={() => setActiveTab("clubs")}
          >
            <div className="dashboard-item">
              <FaFlagCheckered />
              <span className="dashboard-text">Clubs</span>
            </div>
          </li>
          <li
            className={activeTab === "clans" ? "active" : ""}
            onClick={() => setActiveTab("clans")}
          >
            <div className="dashboard-item">
              <GiSwordWound />
              <span className="dashboard-text">Clans</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="dashboard-content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
