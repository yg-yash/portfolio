import React, { useState, useEffect } from "react";
import MyImage from "../assets/images/me.jpeg";
const AnimatedBot = () => {
  const [moveRight, setMoveRight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoveRight((prev) => !prev);
    }, 3000); // Changes direction every 3 seconds (for example)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={`bot-container ${moveRight ? "move-right" : "move-left"}`}>
      <img src={MyImage} alt="Animated Bot" className="bot-avatar" />
    </div>
  );
};

export default AnimatedBot;
