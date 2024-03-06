import React, { useState, useEffect } from "react";

const Card = () => {
  const [digits, setDigits] = useState([[0], [0], [0], [0], [0], [0]]);
  const [activeIndex, setActiveIndex] = useState(digits.length - 1);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isFinished) return;

      setDigits((prevDigits) => {
        const updatedDigits = [...prevDigits];

        let currentValue = updatedDigits[activeIndex][0];
        currentValue++;

        if (currentValue === 10) {
          currentValue = 0;
          if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
          } else {
            setIsFinished(true);
          }
        }

        updatedDigits[activeIndex][0] = currentValue;
        return updatedDigits;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [digits, activeIndex, isFinished]);

  return (
    <div className="flexCenter text-white gap-3">
      <div className="flexCenter bg-slategray-600 p-4 rounded border-start fs-1 fw-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          class="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>
      </div>
      {digits.map((digitArray, index) => (
        <div
          key={index}
          className={`flexCenter bg-slategray-600 p-4 rounded border-start border-end fs-1 fw-bold ${
            index === activeIndex ? "active" : ""
          }`}
        >
          {digitArray[0]}
        </div>
      ))}
    </div>
  );
};

export default Card;
