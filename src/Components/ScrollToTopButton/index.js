import { useEffect, useState } from "react";
import { ArrowButton } from "./styledScrollTopBottom.styled";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ArrowButton $visible={visible} onClick={scrollToTop}>
      <span> Back to top ↑</span>
    </ArrowButton>
  );
};
