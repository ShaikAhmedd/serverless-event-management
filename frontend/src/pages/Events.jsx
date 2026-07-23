import { useEffect, useState } from "react";
import api from "../services/api";
import LoginButton from "../components/LoginButton";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api
      .get("/events")
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const registerForEvent = async (eventId) => {
    try {
      console.log("Registering for event:", eventId);

      const response = await api.post(`/events/${eventId}/register`);

      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Registration failed");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>🎉 EventHub</h1>
        <LoginButton />
      </div>

      {!events || events.length === 0 ? (
        <p>Loading events...</p>
      ) : (
        events.map((event) => (
          <div
            key={event.eventId}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h2>{event.name}</h2>
            <p>{event.description}</p>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Location:</strong> {event.location}
            </p>

            <p>
              <strong>Seats:</strong>{" "}
              {event.capacity - event.registeredCount} remaining
            </p>

            <button onClick={() => registerForEvent(event.eventId)}>
              Register
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Events;