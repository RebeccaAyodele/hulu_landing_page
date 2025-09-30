import hulu from "../assets/hulu.png";
import disney from "../assets/disney+.png";
import max from "../assets/max.png";
import espn from "../assets/espn.png";
import { ButtonGreenLong, ButtonGreenShort } from "./Button";
import { Menu } from "lucide-react";
import { useState } from "react";

const FirstPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen">
      <div className="md:h-[71.5%] h-[46.5%] bg-black py-4 md:px-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <img src={hulu} className="w-16" alt="hulu" />
          </div>
          <div onClick={() => setOpen(!open)} className="bg-gray-600 p-2 rounded md:hidden">
            <Menu color="white" />
          </div>
          {open && (
        <div className="absolute top-16 right-0 w-[60%] rounded-xl bg-gray-800 text-white flex flex-col items-center py-2 md:hidden z-50">
          <a href="#" className="text-gray-400 hover:text-white/90 w-[95%] font-semibold rounded text-center text-sm py-3 hover:bg-gray-600 px-6">LOGIN</a>
          <a href="#" className="text-black font-semibold bg-green-400 rounded text-center px-6 text-sm w-[95%]">TRY HULU FREE FOR ONE MONTH</a>
        </div>
      )}
          <div className="hidden md:block md:hover:bg-gray-500 md:py-2 px-4 md:rounded">
            <button className="font-bold text-sm text-gray-300 hover:text-white">
              LOG IN
            </button>
          </div>
        </div>

        {/* Options */}

        <div className="flex justify-evenly h-full gap-4">
          <div className="flex md:w-[50%] w-[100%] justify-center gap-4">
            <div className="flex justify-center items-center flex-col">
              <div>
                <p className="text-green-400 font-bold text-xs">
                  DISNEY+, HULU BUNDLE BASIS
                </p>
              </div>
              <div className="flex mt-2 justify-between gap-4 items-center">
                <img src={disney} className="md:w-24 w-20 mb-4" alt="disney" />
                <img src={hulu} className="md:w-16 w-14" alt="hulu" />
              </div>
              <div>
                <p className="text-white md:text-[1.5rem] font-semibold leading-tight mb-2">
                  Both with ads, for <br />
                  $10.99/month.
                </p>
              </div>
              <ButtonGreenLong text="Get them both" />
              <p>
                <a className="text-white text-[13px] underline" href="#">
                  Terms apply
                </a>
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div>
                <p className="text-green-400 font-bold text-xs">
                  DISNEY+, HULU, MAX BUNDLE
                </p>
              </div>
              <div className="flex mt-2 justify-between gap-4 items-center">
                <img src={disney} className="md:w-24 w-20 mb-4" alt="disney" />
                <img src={hulu} className="md:w-16 w-14" alt="hulu" />
                <img src={max} className="md:w-16 w-14 h-4" alt="max" />
              </div>
              <div>
                <p className="text-white md:text-[1.5rem] font-semibold leading-tight mb-2">
                  Plans starting at <br />
                  $16.99/month.
                </p>
              </div>
              <ButtonGreenLong text="Learn more" />
              <p>
                <a className="text-white text-[13px] underline" href="#">
                  Terms apply
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blue */}
      <div className="md:h-[18.5%] h-[29%] flex md:flex-row flex-col md:justify-between justify-center items-center bg-gradient-to-r from-slate-900 to-cyan-900 px-8 py-4">
        <div className="flex items-center gap-4 md:ml-24 order-2 md:order-1">
          <img src={disney} className="md:w-16 w-12 h-8" alt="disney" />
          <img src={hulu} className="md:w-10 w-8" alt="hulu" />
          <img src={espn} className="md:w-20 w-14" alt="espn" />
        </div>
        <div className="order-1 md:order-2 text-center leading-tight">
          <p className="text-green-400 font-bold text-xs mb-2">
            DISNEY+, HULU, ESPN+ BUNDLE BASIC
          </p>
          <p className="text-white md:text-2xl text-sm inline md:block">
            Get Hulu, Disney+, and ESPN+, all with ads, for $16.99/mo.
          </p>
          <p className="inline md:block">
            <a className="text-gray-400 underline md:text-sm text-xs" href="#">
              What's Included?
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center order-3">
          <ButtonGreenShort text="Get all three" />
          <p>
            <a className="text-gray-200 text-xs underline" href="#">
              Terms apply
            </a>
          </p>
        </div>
      </div>

      {/* Green */}
      <div className="bg-gradient-to-t from-slate-800 to-green-500 md:h-[25%] h-[24.5%] flex flex-col justify-evenly items-center">
        <p className="text-white font-semibold">BUILD THE PLAN THAT'S RIGHT FOR YOU</p>
        <button className="text-white border-2 rounded px-4 mt-4 py-2 font-semibold hover:bg-gray-300 hover:text-black">START BUILDING</button>
      </div>
    </div>
  );
};

export default FirstPage;
