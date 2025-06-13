import { useState, useEffect } from "react";
import { JSX } from "react";
import checkmark from "../assets/checkmark.svg"

type OptionType = "option1" | "option2" | "option3" | "option4";

const optionData: Record<
  OptionType,
  {
    topContent: JSX.Element;
    tableRows: (string | JSX.Element)[][];
  }
> = {
  option1: {
    topContent: <div><h1>Hi</h1></div>,
    tableRows: [
      [<img src={checkmark} alt="checkmark" className="inline" />, "B1"], [<img src={checkmark} alt="checkmark" className="inline" />, "B2"], [<img src={checkmark} alt="checkmark" className="inline" />, "B3"], [<img src={checkmark} alt="checkmark" className="inline" />, "B4"], [<img src={checkmark} alt="checkmark" className="inline" />, "B5"],
      ["A6", "B6"], ["A7", "B7"], ["A8", "B8"], ["A9", "B9"], ["A10", "B10"], ["A11", "B11"],
    ],
  },
  option2: {
    topContent: <div><h1>Hi 2</h1></div>,
    tableRows: [
      ["", "Y1"], ["X2", "Y2"], ["X3", "Y3"], ["X4", "Y4"], ["X5", "Y5"],
      ["X6", "Y6"], ["X7", "Y7"], ["X8", "Y8"], ["X9", "Y9"], ["X10", "Y10"], ["X11", "Y11"],
    ],
  },
  option3: {
    topContent: <div><h1>Hi 3</h1></div>,
    tableRows: Array.from({ length: 11 }, (_, i) => [`Col2-${i + 1}`, `Col3-${i + 1}`]),
  },
  option4: {
    topContent: <div><h1>Hi 4</h1></div>,
    tableRows: Array.from({ length: 11 }, () => [`---`, `---`]),
  },
};

const FourthPage = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType>("option1");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fixedFirstColumn = isMobile
    ? [
        "Monthly Price", "Subscriptions included in each plan", "Hulu streaming library with tons of episodes and movies", "Endless entertainment with Disney+",
        "Most new episodes on Hulu the day after they air†", "Access to award-winning Hulu Originals", "Watch on your favorite devices, including TV, laptop, phone, or tablet", "No ads in Hulu streaming libraryNo ads in Hulu streaming library",
        "No ads on Disney+No ads on Disney+", "Download and watch on Hulu", "Download and watch on Disney+Download and watch on Disney+"
      ]
    : [
        "Monthly price", "Subscriptions included in each plan",
        "Hulu streaming library with tons of episodes and moviesHulu streaming library with tons of episodes and movies",
        "Endless entertainment with Disney+Endless entertainment with Disney+",
        "Most new episodes on Hulu the day after they air†",
        "Access to award-winning Hulu Originals",
        "Watch on your favorite devices, including TV, laptop, phone, or tablet",
        "No ads in Hulu streaming libraryNo ads in Hulu streaming library",
        "No ads on Disney+No ads on Disney+",
        "Download and watch on HuluDownload and watch on Hulu",
        "Download and watch on Disney+Download and watch on Disney+",
      ];

  const { topContent, tableRows } = optionData[selectedOption];

  return (
    <div className="bg-black p-20">
      <div className="text-center text-white">
        <h1 className="md:text-[3rem] py-4 font-bold">Select Your Plan</h1>
        <p className="text-xl">No hidden fees, equipment rentals, or installation appointments.</p>
        <p className="text-xl font-bold">Switch plans or cancel anytime.**</p>

        <select
          onChange={(e) => setSelectedOption(e.target.value as OptionType)}
          value={selectedOption}
          className="bg-white/40 text-black rounded-3xl my-10 px-[10px] py-[8px] font-semibold text-sm text-center"
        >
          <option value="option1">Disney+, Hulu Bundle</option>
          <option value="option2">Disney+, Hulu, ESPN+ Bundle</option>
          <option value="option3">Disney+, Hulu, Max Bundle</option>
          <option value="option4">Hulu + Live TV</option>
        </select>

        <div>{topContent}</div>

        <div className="md:w-[75%] mx-auto">
          {/* Desktop Table */}
          <table className="w-full table-auto text-left border-collapse hidden md:table">
            <thead>
              <tr className="border-t">
                <th className="py-4">Fixed Column</th>
                <th className="py-4">Second Column</th>
                <th className="py-4">Third Column</th>
              </tr>
            </thead>
            <tbody>
              {fixedFirstColumn.map((label, index) => (
                <tr key={index} className="border-t border-gray-500">
                  <td className="py-4 md:w-1/3 text-sm">{label}</td>
                  <td className="py-4 md:w-1/3 text-center">{tableRows[index][0]}</td>
                  <td className="py-4 md:w-1/3 text-center">{tableRows[index][1]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View Cards */}
          <div className="md:hidden flex flex-col gap-4">
            {fixedFirstColumn.map((label, index) => (
              <div key={index} className="border-t pt-4 pb-2">
                <div className="text-center mb-2">{label}</div>
                <div className="flex justify-between px-4">
                  <div className="text-sm">{tableRows[index][0]}</div>
                  <div className="text-sm">{tableRows[index][1]}</div>
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
