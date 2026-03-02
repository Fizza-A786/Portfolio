import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import CustomCursor from "./Component/CustomCursor";

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // default dark

  return (
    <div className={darkMode ? "dark" : ""}>
      <CustomCursor />
      
      <div className="min-h-screen bg-gray-900 dark:bg-gray-50 transition-colors duration-500 relative overflow-x-hidden">
        {/* Pass darkMode & setDarkMode to Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;