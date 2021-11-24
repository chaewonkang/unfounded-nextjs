import React, { useEffect, useRef, useState } from "react";
import rightArrow from "../static/images/arrow_right.png";
import leftArrow from "../static/images/arrow_left.png";

const imagePath2 = [];

const delay = 3000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === imagePath2.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="slideshow">
        <div className="arrowbox">
          <div
            onClick={() => {
              if (index < 2 && 0 < index) setIndex(index - 1);
            }}
          >
            <img src={leftArrow}></img>
          </div>
          <div
            onClick={() => {
              if (index < 2) setIndex(index + 1);
            }}
          >
            <img src={rightArrow}></img>
          </div>
        </div>
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imagePath2.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image}></img>
            </div>
          ))}
        </div>

        <div className="floatText">
          <span>Do you need anything from Korea?</span>
          <p>K-Beauty, K-Food...what else.</p>
        </div>

        <div className="slideshowDots">
          {imagePath2.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slideshow;
