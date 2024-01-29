import React from "react";
import { Link } from "react-router-dom"; // Adjust the import if using React Router

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>404 - Not Found</h1>
      <p>
        The page you are looking for might be unavailable or does not exist.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default NotFoundPage;
