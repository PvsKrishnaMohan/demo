import React, { useState } from "react";

const imageArray = [
  "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232332/C1.jpg",
  "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232244/c2.png",
  "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232238/c3.jpg",
  "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232238/c4.jpg",
  "https://res.cloudinary.com/krishnamohan479/image/upload/v1745232238/c5.jpg",
  "https://wallpapers.com/images/hd/shraddha-kapoor-young-actress-mu8064auir120ahg.jpg",
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
  return (
    <div className="border p-2 m-4 rounded-3xl bg-green-100 flex justify-center items-center gap-4">
      <button
        className="p-3 text-xl rounded-full bg-emerald-300 shadow"
        onClick={handleDecrement}
      >
        ⬅️
      </button>

      <div className="w-full max-w-[900px] aspect-[16/9] overflow-hidden rounded-3xl">
      {
        imageArray.map((eachImg, index)=> {
            return (
                <img key={index}
                className={`w-full h-full object-cover ${currentIndex === index ? "block" : "hidden"}`}
                src={eachImg}
                alt="carousel"
              />
            )
        })
      }
        
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
