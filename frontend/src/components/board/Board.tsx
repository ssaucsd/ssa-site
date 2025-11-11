import { Container } from "react-bootstrap";
import BoardCards from "./BoardCards";
import PastBoard from "./PastBoard";

const Board = () => {
  return (
    <Container className="board-content" fluid>
      <BoardCards />
      <hr />
      <PastBoard />
    </Container>
  );
};

export default Board;
