import { Row, Col } from "react-bootstrap";
import { lazy, Suspense } from "react";

// Lazy load the YouTube component
const LazyYouTubeVideo = lazy(() => import("./LazyYouTubeVideo.tsx"));

const VideoEmbeds = () => {
  return (
    <Row className="video-embeds g-3 g-lg-4">
      <Col xs={12} lg={6} className="video-embed-col">
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                paddingBottom: "56.25%",
                backgroundColor: "#f0f0f0",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Loading video...
              </div>
            </div>
          }
        >
          <LazyYouTubeVideo videoId="BP3JlLMf71c" />
        </Suspense>
      </Col>
      <Col xs={12} lg={6} className="video-embed-col">
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                paddingBottom: "56.25%",
                backgroundColor: "#f0f0f0",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Loading video...
              </div>
            </div>
          }
        >
          <LazyYouTubeVideo videoId="W1jpaxIIwrY" />
        </Suspense>
      </Col>
    </Row>
  );
};

export default VideoEmbeds;
