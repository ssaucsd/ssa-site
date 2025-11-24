import { Container, Row } from "react-bootstrap";
import EnsembleCarousel from "./EnsembleCarousel";
import EnsembleDescription from "./EnsembleDescription";
import VideoEmbeds from "./VideoEmbeds";

const Ensemble = () => {
  return (
    <Container fluid className="ensemble-content">
      <h1>Ensemble</h1>
      <Row className="ensemble-row align-items-center">
        <EnsembleCarousel />
        <EnsembleDescription />
      </Row>
      <VideoEmbeds />
    </Container>
  );
};

export default Ensemble;
