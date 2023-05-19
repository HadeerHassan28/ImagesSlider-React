import React, { useState } from "react";

const Slider = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [
    { src: "Images/1.jpeg" },
    { src: "Images/2.jpeg" },
    { src: "Images/3.webp" },
  ];

  function Previous() {
    if (currentImg > 0) setCurrentImg(currentImg - 1);
  }
  function Next() {
    if (currentImg < images.length - 1) setCurrentImg(currentImg + 1);
  }

  return (
    <div style={{ backgroundColor: "	antiquewhite	" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
          marginBottom: "1.5%",
        }}
      >
        <button onClick={Previous} disabled={currentImg === 0}>
          Previous
        </button>
        <button onClick={Next} disabled={currentImg === images.length - 1}>
          Next
        </button>
      </div>

      <img
        src={images[currentImg].src}
        style={{ width: "50%" }}
        alt="slider"
      ></img>
    </div>
  );
};

export default Slider;
