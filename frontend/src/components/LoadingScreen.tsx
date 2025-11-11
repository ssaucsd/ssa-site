import { Spinner } from "react-bootstrap";

const LoadingScreen = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f2e4",
      }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "3rem",
          height: "3rem",
          borderWidth: "0.3rem",
          color: "#181a18",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "1.1rem",
          color: "#181a18",
          fontWeight: 600,
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default LoadingScreen;
