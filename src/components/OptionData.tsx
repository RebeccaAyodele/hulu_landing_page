import { JSX } from "react";
import checkmark from "../assets/checkmark.svg";
import disney from "../assets/disney+.png";
import hulu from "../assets/hulu.png";
import espn from "../assets/espn.png";
import max from "../assets/max.png";
import hulu_live from"../assets/hulu_live.png"

type OptionType = "option1" | "option2" | "option3" | "option4";


export const optionData: Record<
  OptionType,
  {
    topContent: JSX.Element;
    tableRows: (string | JSX.Element)[][];
  }
> = {
  option1: {
    topContent: (
      <div className="flex justify-between md:w-[75%] w-full mx-auto">
        <div className="md:w-1/3 md:block hidden"></div>
        <div className="md:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <div className="flex items-center gap-6 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
          </div>
          <p className="text-xs font-semibold my-2">
            Disney+, Hulu Bundle Basic
          </p>
          <button className="bg-white text-sm text-black rounded font-bold md:px-[28%] px-4 h-[2.5rem] hover:bg-white/80 my-2">
            $10 / MONTH
          </button>
          <p className="text-[10px] font-extrabold">SAVE 44%*</p>
        </div>
        <div className="md:w-1/3 w-1/2 flex flex-col flex-1 justify-center items-center">
          <div className="flex items-center gap-6 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
          </div>
          <p className="text-xs font-semibold my-2">
            Disney+, Hulu Bundle Basic
          </p>
          <button className="bg-white text-sm text-black rounded font-bold md:px-[28%] px-4 h-[2.5rem] hover:bg-white/80 my-2">
            $19 / MONTH
          </button>
          <p className="text-[10px] font-extrabold">SAVE 42%</p>
        </div>
      </div>
    ),
    tableRows: [
      [ 
        "Monthly Price",
        <p className="text-sm">
          <span className="block text-xs text-gray-400 line-through">
            $19.98/mo.
          </span>
          $10.99/mo
        </p>,
        <p className="text-sm">
          <span className="block text-xs text-gray-400 line-through">
            $34.98/mo.
          </span>
          $19.99/mo
        </p>,
      ],
      [
        "Subscriptions included in each plan",
        <p className="text-sm">Disney+ and Hulu</p>,
        <p className="text-sm">Disney+ and Hulu</p>,
      ],
      [
        "Hulu streaming library with tons of episodes and movies",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Endless entertainment with Disney+",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Most new episodes on Hulu the day after they air†",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Access to award-winning Hulu Originals",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Watch on your favorite devices",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "No ads in Hulu streaming library",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "No ads on Disney+",
        "-",
        <p className="text-sm w-[60%] mx-auto">
          Ads will be served in select live and linear content
        </p>,
      ],
      [
        "Download and watch on Hulu",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Download and watch on Disney+",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
    ],
  },

  option2: {
    topContent: (
      <div className="flex items-end justify-between md:w-[75%] mx-auto w-full">
        <div className="md:w-1/3 hidden md:block"></div>
        <div className="md:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <button className="text-[10px] font-bold text-black bg-green-500 rounded-2xl p-2">
            BEST VALUE
          </button>
          <div className="flex items-center gap-2 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
            <img src={espn} alt="espn" className="w-16" />
          </div>
          <p className="text-xs font-semibold my-2">
            Disney+, Hulu, ESPN+ Bundle Basic
          </p>
          <button className="bg-white text-sm text-black rounded font-bold px-[22%]  h-[2.5rem] hover:bg-white/80 my-2">
            $16.99 / MONTH
          </button>
          <p className="text-[10px] font-extrabold">SAVE 46%*</p>
        </div>
        <div className="md:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <div className="flex items-center gap-2 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
            <img src={espn} alt="espn" className="w-16" />
          </div>
          <p className="text-xs font-semibold my-2">
            Disney+, Hulu, ESPN+ Bundle Premium
          </p>
          <button className="bg-white text-sm text-black rounded font-bold px-[22%]  h-[2.5rem] hover:bg-white/80 my-2">
            $26.99 / MONTH
          </button>
          <p className="text-[10px] font-extrabold">SAVE 42%*</p>
        </div>
      </div>
    ),
    tableRows: [
      [
        "Monthly Price. Save up to $19.98/mo.*",
        <p className="text-sm">
          <span className="block text-xs text-gray-400 line-through">
            $31.97/mo.
          </span>
          $16.99/mo
        </p>,
        <p className="text-sm">
          <span className="block text-xs text-gray-400 line-through">
            $46.07/mo.
          </span>
          $26.99/mo
        </p>,
      ],
      [
        "Subscriptions included in each plan",
        <p className="text-sm">Disney+, Hulu and ESPN+</p>,
        <p className="text-sm">Disney+, Hulu and ESPN+</p>,
      ],
      [
        "Hulu streaming library with tons of episodes and movies",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Endless entertainment with Disney+",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Most new episodes on Hulu the day after they air†",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Access to award-winning Hulu Originals",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Watch on your favorite devices",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "No ads in Hulu streaming library",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "No ads on Disney+",
        "-",
        <p className="text-sm w-[60%] mx-auto">
          Ads will be served in select live and linear content
        </p>,
      ],
      [
        "Download and watch on Hulu",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Download and watch on Disney+",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
    ],
  },
  option3: {
    topContent: (
      <div className="flex justify-between items-start md:w-[75%] w-full mx-auto">
        <div className="md:w-1/3 md:block hidden"></div>
        <div className="md:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <div className="flex items-center gap-6 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
            <img src={max} className="w-10" alt="max" />
          </div>
          <p className="text-xs font-semibold my-2">
            Disney+, Hulu, Max Bundle
          </p>
          <button className="bg-white text-sm text-black rounded font-bold px-[28%] h-[2.5rem] hover:bg-white/80 my-2">
            LEARN MORE
          </button>
        </div>
        <div className="md:w-1/3 w-1/2 flex flex-col flex-1 justify-center items-center">
          <div className="flex items-center gap-6 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
            <img src={max} className="w-10" alt="max" />
          </div>
          <p className="text-xs font-semibold my-2">
            Disney+, Hulu, Max Bundle
          </p>
          <button className="bg-white text-sm text-black rounded font-bold px-[28%] h-[2.5rem] hover:bg-white/80 my-2">
            LEARN MORE
          </button>
          <p className="text-[10px]">
            Ads will be served in select live and linear content
          </p>
        </div>
      </div>
    ),

    tableRows: [
      [
        "Monthly Price. Save up to $21.98/mo.*",
        <p className="text-sm">
          <span className="block text-xs text-gray-400 line-through">
            $29.97/mo.
          </span>
          $16.99/mo
        </p>,
        <p className="text-sm">
          <span className="block text-xs text-gray-400 line-through">
            $51.07/mo.
          </span>
          $29.99/mo
        </p>,
      ],
      [
        "Subscriptions included in each plan",
        <p className="text-sm">Disney+, Hulu and Max</p>,
        <p className="text-sm">Disney+, Hulu and Max</p>,
      ],
      [
        "Hulu streaming library with tons of episodes and movies",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Endless entertainment with Disney+",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Access to Max. Watch HBO content in the Hulu app††",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Most new episodes on Hulu the day after they air†",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Access to award-winning Hulu Originals",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Watch on your favorite devices, including TV, laptop, phone, or tablet",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Ad-free streaming",
        "-",
       "Ads will be served in select live and linear content"
      ],
      [
        "Download and watch on Disney+",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Download and watch on Hulu",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
    ],
  },
  option4: {
    topContent: (
      <div className="flex justify-between md:w-[75%] mx-auto w-full">
        <div className="md:w-1/3 hidden md:block"></div>
        <div className="md:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <button className="text-[10px] font-bold text-black bg-green-500 rounded-2xl p-2">
            MOST POPULAR
          </button>
            <img src={hulu_live} className="w-52" alt="hulu_live" />
          
          <button className="bg-white text-sm text-black rounded font-bold px-[22%]  h-[2.5rem] hover:bg-white/80 mb-2 mt-8">
            $82.99 / Mo.
          </button>
          <p className="text-[10px] font-extrabold">3 DAY FREE TRIAL*</p>
        </div>
        <div className="md:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <div className="flex items-center gap-2 my-2">
            <img src={hulu_live} className="w-52" alt="hulu_live" />
          </div>
         
          <button className="bg-white text-sm text-black rounded font-bold px-[22%]  h-[2.5rem] hover:bg-white/80 mb-2 mt-8">
            $95.99 / Mo.
          </button>
        </div>
      </div>
    ),
    tableRows: [
      [
        "Monthly Price",
        <p className="text-sm">
          <span className="block text-xs text-gray-400 line-through">
            $82.99/mo.
          </span>
          $95.99/mo
        </p>,
        <p className="text-sm">
          <span className="block text-xs text-gray-400 line-through">
            $51.07/mo.
          </span>
          $29.99/mo
        </p>,
      ],
      [
        "Subscriptions included in each plan",
        <p className="text-sm">Hulu + Live TV, Disney+, and ESPN+</p>,
        <p className="text-sm">Hulu + Live TV, Disney+, and ESPN+</p>,
      ],
      [
        "Hulu streaming library with tons of episodes and movies",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Endless entertainment with Disney+",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Live sports with ESPN+, now in the Hulu app",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Most new episodes on Hulu the day after they air†",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Access to award-winning Hulu Originals",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Watch on your favorite devices, including TV, laptop, phone, or tablet",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "No ads in Hulu streaming library",
        "-",
       "Ads will be served in select live and linear content"
      ],
      [
        "No ads on Disney+",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Download and watch on Hulu",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Download and watch on Disney+",
        "-",
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Live TV on Hulu with 100+ top channels. No cable required.",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Live TV guide to navigate channels",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        "Record Live TV with Unlimited DVRRecord Live TV with Unlimited DVR",
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
    ],
  },
};