import React, { useEffect, useState } from "react";
import '../generalComponents/ScrollProgress.css'
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="scroll-progress-container">
        <div
          className="scroll-progress"
          style={{ width: scrollProgress }}
        ></div>
        <ul className="scroll-links">
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 1
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 3
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ScrollProgress;
