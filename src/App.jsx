import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
// import CustomCursor from "./Component/CustomCursor";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // default dark

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* <CustomCursor /> */}

      {/* Main content */}
      <div className="relative z-10 transition-colors duration-500  bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;