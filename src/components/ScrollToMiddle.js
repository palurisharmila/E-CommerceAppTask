import React, { useRef, useEffect } from "react";
 
const ScrollButton = () => {
  const buttonRef = useRef(null);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const maxScroll = document.body.scrollHeight - screenHeight;
 
      const scrollPercentage = Math.min(scrollY / maxScroll, 1);
    };
 
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
 
    return () => {
      // Cleanup the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <button
      ref={buttonRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#6200ea",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "top 0.1s ease",
      }}
    >
      Scroll Button
    </button>
  );
};
 
export default ScrollButton;
 