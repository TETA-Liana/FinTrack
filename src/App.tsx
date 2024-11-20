import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./products";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <About />
      <Products/>
    </div>
  );
};

export default App;
