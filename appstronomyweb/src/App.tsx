import React from "react";
import CardContainer from "./components/CardsContainer/CardsContainer";
import ApodCard from "./components/APOD/ApodCard/ApodCard";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
      <CardContainer />
      <ApodCard />
    </div>
  );
};

export default App;
