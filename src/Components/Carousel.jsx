import React, { useState, useEffect } from "react";

const imageArray = [
  {
    image:
      "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232332/C1.jpg",
    title: "C1",
  },
  {
    image:
      "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232244/c2.png",
    title: "C2",
  },
  {
    image:
      "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232238/c3.jpg",
    title: "C3",
  },
  {
    image:
      "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232238/c4.jpg",
    title: "C4",
  },
  {
    image:
      "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232238/c5.jpg",
    title: "C5",
  },
  {
    image:
      "https://wallpapers.com/images/hd/shraddha-kapoor-young-actress-mu8064auir120ahg.jpg",
    title: "Shraddha Kapoor",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncrement = () => {
    setCurrentIndex((currentIndex + 1) % imageArray.length);
  };
  const handleDecrement = () => {
    setCurrentIndex(
      currentIndex === 0 ? imageArray.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleIncrement();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <div className="border p-2 m-4 rounded-3xl bg-green-100 flex justify-center items-center gap-4">
      <button
        className="p-3 text-xl rounded-full bg-emerald-300 shadow"
        onClick={handleDecrement}
      >
        ⬅️
      </button>

      <div className="w-full max-w-[1000px] aspect-[16/9] overflow-hidden rounded-3xl">
        {imageArray.map((eachImg, index) => {
          const { image, title } = eachImg;
          return (
            <div className="flex flex-col justify-center items-center" key={index}>
              <img
                className={`w-full h-full object-cover relative ${currentIndex === index ? "block" : "hidden"}`}
                src={image}
                alt="carousel"
              />
              <h6
                className={`text-center z-1 overflow-hidden text-6xl absolute w-full font-semibold bg-green-300 py-1 sm:text-sm
                     bottom-0 left-1/2 transform -translate-x-1/2 ${currentIndex === index ? "block" : "hidden"}`}
              >
                {title}
              </h6>
            </div>
          );
        })}
      </div>

      <button
        className="p-3 text-xl rounded-full sm:p-3 sm:w-16 sm:h-16 sm:text-xl sm:rounded-full bg-emerald-300 shadow"
        onClick={handleIncrement}
      >
        ➡️
      </button>
    </div>
  );
};

export default Carousel;
