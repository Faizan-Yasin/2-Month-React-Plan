import Card from './components/Card'
import TailwindCard from './components/TailwindCard'
import StyledCard from './components/StyledCard'
import { useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  background: "white",
  color: "black",
  border: "#ddd",
  bodyColor: "#555",
  footerColor: "#777",
};

const darkTheme = {
  background: "#1f2937",
  color: "white",
  border: "#4b5563",
  bodyColor: "#d1d5db",
  footerColor: "#9ca3af",
};

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prev => {
      document.body.classList.toggle("dark", !prev);
      return !prev;
    });
  }

  return (
    <>
      <button onClick={toggleDarkMode} className='bg-gray-600 flex active:scale-90 mt-4 ml-8 rounded-lg cursor-pointer hover:shadow-md transition hover:scale-105 text-white font-bold  px-4 py-2 '>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div style={{ display: "flex", gap: "20px", padding: "30px", flexWrap: "wrap" }}>

        <Card
          title="React"
          body="React is a JavaScript library for building user interfaces."
          footer="Learning CSS Modules"
        />
        <TailwindCard
          title="React"
          body="React is a JavaScript library for building user interfaces."
          footer="Learning Tailwind CSS"
        />
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <StyledCard
            title="React"
            body="React is a JavaScript library for building user interfaces."
            footer="Learning Styled Components"
          />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
