import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillCloudSunFill } from 'react-icons/bs';

function DarkMode() {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`dark:bg-[#818287a9] bg-stone-700  relative    text-center rounded-full  text-white icon mr-4 ${isDarkMode ? "dark" : ""} `}>
      <button onClick={() => {
        toggleDarkMode();
        handleToggle();
      }}>
        {toggle ? <BsFillMoonStarsFill /> : <BsFillCloudSunFill />}
      </button>
    </div>
  );
}

export default DarkMode;
