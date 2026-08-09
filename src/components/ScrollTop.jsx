import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollTop.css";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && (
        <button
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollTop;