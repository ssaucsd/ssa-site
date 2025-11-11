import JoinForm from "./JoinForm";
import { Container } from "react-bootstrap";

const Join = () => {
  return (
    <Container fluid className="join-content">
      <h1>Join Us</h1>
      <p>
        We'd love to have you at an SSA rehearsal or event! Join us by: <br />
        <ul>
          <li>
            <a href="https://www.instagram.com/ssa_at_ucsd">
              Following us on Instagram
            </a>
          </li>
          <li>
            <a href="https://discord.gg/kDqHjKeUhJ">
              Joining our Discord server
            </a>
          </li>
          <li>Subscribing to our mailing list below</li>
        </ul>
      </p>
      <JoinForm />
    </Container>
  );
};

export default Join;
