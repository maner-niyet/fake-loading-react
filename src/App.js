import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./styles.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <ClimbingBoxLoader size={50} color={"black"} loading={loading} />
      ) : (
        <img
          src="https://source.unsplash.com/500x500/?nature,water"
          alt="img"
        />
      )}
    </div>
  );
}
export default App;
