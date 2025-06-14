import { useState } from "react";
import { JSX } from "react";
import checkmark from "../assets/checkmark.svg";
import disney from "../assets/disney+.png";
import hulu from "../assets/hulu.png";
import espn from "../assets/espn.png"

type OptionType = "option1" | "option2" | "option3" | "option4";

const firstColumnData = [
  "Monthly Price",
  "Subscriptions included in each plan",
  "Hulu streaming library with tons of episodes and movies",
  "Endless entertainment with Disney+",
  "Most new episodes on Hulu the day after they air†",
  "Access to award-winning Hulu Originals",
  "Watch on your favorite devices",
  "No ads in Hulu streaming library",
  "No ads on Disney+",
  "Download and watch on Hulu",
  "Download and watch on Disney+",
];

const optionData: Record<
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
          <p className="text-xs font-semibold my-2">Disney+, Hulu Bundle Basic</p>
          <button className="bg-white text-sm text-black rounded font-bold px-[28%] h-[3rem] hover:bg-white/80 my-2">
            $10 / MONTH
          </button>
          <p className="text-[10px] font-extrabold">SAVE 44%*</p>
        </div>
        <div className="md:w-1/3 w-1/2 flex flex-col flex-1 justify-center items-center">
          <div className="flex items-center gap-6 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
          </div>
          <p className="text-xs font-semibold my-2">Disney+, Hulu Bundle Basic</p>
          <button className="bg-white text-sm text-black rounded font-bold px-[28%]  h-[3rem] hover:bg-white/80 my-2">
            $19 / MONTH 
          </button>
          <p className="text-[10px] font-extrabold">SAVE 42%*</p>
        </div>
      </div>
    ),
    tableRows: [
      [
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
        <p className="text-sm">Disney+ and Hulu</p>,
        <p className="text-sm">Disney+ and Hulu</p>,
      ],
      [
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      [
        <img src={checkmark} alt="checkmark" className="inline" />,
        <img src={checkmark} alt="checkmark" className="inline" />,
      ],
      ["-", <img src={checkmark} alt="checkmark" className="inline" />],
      ["-", <p className="text-sm w-[60%] mx-auto">Ads will be served in select live and linear content</p>],
      ["-", <img src={checkmark} alt="checkmark" className="inline" />],
      ["-", <img src={checkmark} alt="checkmark" className="inline" />],
    ],
  },
  option2: {
    topContent: (
      <div className="flex justify-between md:w-[75%] w-full mx-auto">
        <div className="md:w-1/3 hidden md:block"></div>
        <div className="md:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <div className="flex items-center gap-2 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
            <img src={espn} alt="espn" className="w-16" />
          </div>
          <p className="text-xs font-semibold my-2">Disney+, Hulu, ESPN+ Bundle Basic</p>
          <button className="bg-white text-sm text-black rounded font-bold px-[28%]  h-[3rem] hover:bg-white/80 my-2">
            $16.99 / MONTH
          </button>
          <p className="text-[10px] font-extrabold">SAVE 44%*</p>
        </div>
        <div className="md:w-1/3 w-1/2 flex flex-col justify-center items-center">
          <div className="flex items-center gap-2 my-4">
            <img src={disney} className="w-16 h-8" alt="disney" />
            <img src={hulu} className="w-10 h-6" alt="hulu" />
            <img src={espn} alt="espn" className="w-16" />
          </div>
          <p className="text-xs font-semibold my-2">Disney+, Hulu, ESPN+ Bundle Premium</p>
          <button className="bg-white text-sm text-black rounded font-bold px-[28%]  h-[3rem] hover:bg-white/80 my-2">
            $26.99 / MONTH
          </button>
          <p className="text-[10px] font-extrabold">SAVE 42%*</p>
        </div>
      </div>
    ),
    tableRows: [
      ["", "Y1"],
      ["X2", "Y2"],
      ["X3", "Y3"],
      ["X4", "Y4"],
      ["X5", "Y5"],
      ["X6", "Y6"],
      ["X7", "Y7"],
      ["X8", "Y8"],
      ["X9", "Y9"],
      ["X10", "Y10"],
      ["X11", "Y11"],
    ],
  },
  option3: {
    topContent: (
      <div>
        <h1>Hi 3</h1>
      </div>
    ),
    tableRows: Array.from({ length: 11 }, (_, i) => [
      `Col2-${i + 1}`,
      `Col3-${i + 1}`,
    ]),
  },
  option4: {
    topContent: (
      <div>
        <h1>Hi 4</h1>
      </div>
    ),
    tableRows: Array.from({ length: 11 }, () => [`---`, `---`]),
  },
};

const FourthPage = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType>("option1");

  const { topContent, tableRows } = optionData[selectedOption];

  return (
    <div className="bg-black/95 p-20">
      <div className="text-center text-white">
        <h1 className="md:text-[3rem] py-4 font-bold">Select Your Plan</h1>
        <p className="text-xl">
          No hidden fees, equipment rentals, or installation appointments.
        </p>
        <p className="text-xl font-bold">Switch plans or cancel anytime.**</p>

        <select
          onChange={(e) => setSelectedOption(e.target.value as OptionType)}
          value={selectedOption}
          className="bg-white text-black rounded-3xl my-10 px-6 py-[10px] font-semibold text-sm text-center"
        >
          <option value="option1">Disney+, Hulu Bundle</option>
          <option value="option2">Disney+, Hulu, ESPN+ Bundle</option>
          <option value="option3">Disney+, Hulu, Max Bundle</option>
          <option value="option4">Hulu + Live TV</option>
        </select>

        <div>{topContent}</div>

        <div className="md:w-[75%] mx-auto">
          {/* Desktop Table */}
          <table className="w-full table-auto text-left mt-10 border-collapse hidden md:table">
            <tbody>
              {firstColumnData.map((label, index) => (
                <tr key={index} className="border-t border-gray-500">
                  <td className="py-4 text-sm text-gray-200">{label}</td>
                  <td className="py-4 text-center text-gray-200">{tableRows[index][0]}</td>
                  <td className="py-4 text-center text-gray-200">{tableRows[index][1]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View Cards */}
          <div className="md:hidden flex flex-col gap-4">
            {firstColumnData.map((label, index) => (
              <div key={index} className="border-t pt-4 pb-2">
                <div className="text-center mb-2 font-medium">{label}</div>
                <div className="flex justify-between px-4 text-sm">
                  <div>{tableRows[index][0]}</div>
                  <div>{tableRows[index][1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
