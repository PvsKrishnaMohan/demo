import React from "react";
import Earth from "./Earth";
import { Sparkles } from "./Sparkles";
import { useTheme } from "@mui/material/styles";

function Globe() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <>
      <div className="h-screen overflow-hidden text-white rounded-2xl">
        <article className="grid gap-2 sm:gap-4 text-center relative z-10 pt-6 sm:pt-10 px-4 sm:px-0">
          <span
            className={`inline-block text-xs sm:text-sm border p-1 px-3 w-fit mx-auto rounded-full ${
              isDarkMode
                ? "border-[#03060e] bg-[#02050c]"
                : "border-gray-300 bg-gray-200 text-gray-900"
            }`}
          >
            Kindness is charity
          </span>
          <h5 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            Design with a Global
            <br />
            Perspective, Innovate with Ease.
          </h5>
          <div>
            <img
              src="https://res.cloudinary.com/krishnamohan479/image/upload/v1661537569/ms4-modified_ku28n9.png"
              alt="Globe"
              className="w-48 sm:w-64 md:w-72 mx-auto block"
            />
          </div>
        </article>

        <div className="relative -mt-24 sm:-mt-32 h-64 sm:h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474]">
          <Sparkles />
        </div>
      </div>
    </>
  );
}
export default Globe;
