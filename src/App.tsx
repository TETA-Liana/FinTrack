import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./products";
import Resources from "./resources";
import Support from "./support";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <About />
      <Products/>
      <Resources/>
      <Support/>
    </div>
  );
};

export default App;
