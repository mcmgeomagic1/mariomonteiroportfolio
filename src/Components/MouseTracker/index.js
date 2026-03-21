import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { TrackerCircle } from "./styledMouseTracker.styled";

export const MouseTracker = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const [outline, setOutline] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("button")) {
        setOutline(true);
      } else {
        setOutline(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <TrackerCircle style={{ x, y }} className={outline ? "outline" : ""} />
  );
};
