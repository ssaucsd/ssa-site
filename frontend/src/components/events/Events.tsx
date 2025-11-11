import { Container } from "react-bootstrap";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./UpcomingEvents";

const Events = () => {
  return (
    <Container fluid className="events-content">
      <h1>Events</h1>
      <hr />
      <UpcomingEvents />
      <hr />
      <PastEvents />
    </Container>
  );
};

export default Events;
