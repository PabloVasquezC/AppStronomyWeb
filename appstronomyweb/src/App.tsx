import React from "react";
import CardContainer from "./components/CardsContainer/CardsContainer";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
      <CardContainer />
    </div>
  );
};

export default App;
