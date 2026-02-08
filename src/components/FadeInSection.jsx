// FadeInSection.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import "./FadeInSection.css";

function FadeInSection({ children }) {
  const { ref, inView } = useInView({
   
    threshold: 0.2       // 10% visible
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}

export default FadeInSection;
