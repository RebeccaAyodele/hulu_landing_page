import { useState } from "react";
import { optionData } from "./OptionData";
import { ChevronDown, ChevronUp } from "lucide-react";
import checkmark from "../assets/checkmark.svg";

type OptionType = "option1" | "option2" | "option3" | "option4";

const FourthPage = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType>("option1");
  const [open, setOpen] = useState(false);

  const { topContent, tableRows } = optionData[selectedOption];

  return (
    <div className="bg-black/95 md:p-20 px-2 py-10">
      <div className="text-center text-white">
        <h1 className="md:text-[3rem] py-4 font-bold">Select Your Plan</h1>
        <p className="text-xl">
          No hidden fees, equipment rentals, or installation appointments.
        </p>
        <p className="text-xl font-bold">Switch plans or cancel anytime.**</p>

        {/* Plan selector */}
        <select
          onChange={(e) => setSelectedOption(e.target.value as OptionType)}
          value={selectedOption}
          className="bg-white text-black rounded-3xl my-10 md:px-6 py-[10px] font-semibold text-sm text-center"
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
              {tableRows.map((row, index) => (
                <tr key={index} className="border-t border-gray-500">
                  <td className="py-4 text-sm text-gray-200">{row[0]}</td>
                  <td className="py-4 text-center text-gray-200">{row[1]}</td>
                  <td className="py-4 text-center text-gray-200">{row[2]}</td>
                </tr>
              ))}

              {/* Show Add-ons */}
              {!open && (
                <tr
                  onClick={() => setOpen(true)}
                  className="border-t border-gray-500 cursor-pointer hover:bg-gray-800/50"
                >
                  <td colSpan={3} className="py-4 text-center">
                    <span className="text-gray-200 flex items-center justify-center gap-2">
                      Show Add-ons <ChevronDown className="w-7 h-7" />
                    </span>
                  </td>
                </tr>
              )}

     
              {open && (
                <>
                  <tr className="border-t border-gray-700">
                    <td className="py-4 text-sm text-white/90">HBO Max</td>
                    <td className="py-4 text-center text-gray-200">
                      <img src={checkmark} alt="checkmark" className="inline" />
                    </td>
                    <td className="py-4 text-center text-gray-200">
                      <img src={checkmark} alt="checkmark" className="inline" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="py-4 text-sm text-white/90">CINEMAX®</td>
                    <td className="py-4 text-center text-gray-200">
                      <img src={checkmark} alt="checkmark" className="inline" />
                    </td>
                    <td className="py-4 text-center text-gray-200">
                      <img src={checkmark} alt="checkmark" className="inline" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="py-4 text-sm text-white/90">Paramount+ with SHOWTIME</td>
                    <td className="py-4 text-center text-gray-200">
                      <img src={checkmark} alt="checkmark" className="inline" />
                    </td>
                    <td className="py-4 text-center text-gray-200">
                      <img src={checkmark} alt="checkmark" className="inline" />
                    </td>
                  </tr>
                  <tr className="border-t border-gray-700">
                    <td className="py-4 text-sm text-white/90">Starz</td>
                    <td className="py-4 text-center text-gray-200">
                      <img src={checkmark} alt="checkmark" className="inline" />
                    </td>
                    <td className="py-4 text-center text-gray-200">
                      <img src={checkmark} alt="checkmark" className="inline" />
                    </td>
                  </tr>

                  <tr
                    onClick={() => setOpen(false)}
                    className="border-t border-gray-500 cursor-pointer hover:bg-gray-800/50"
                  >
                    <td colSpan={3} className="py-4 text-center">
                      <span className="text-gray-200 font-semibold flex items-center justify-center gap-2">
                        Hide Add-ons <ChevronUp className="w-7 h-7" />
                      </span>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>

          {/* Mobile View Cards */}
          <div className="md:hidden flex flex-col gap-4 mt-10">
            {tableRows.map((row, index) => (
              <div key={index} className="border-t pt-4 pb-2">
                <div className="text-center mb-2 text-sm text-gray-200">
                  {row[0]}
                </div>
                <div className="flex justify-between px-4 text-sm">
                  <div>{row[1]}</div>
                  <div>{row[2]}</div>
                </div>
              </div>
            ))}

            {/* Show Add-ons */}
            {!open && (
              <div
                onClick={() => setOpen(true)}
                className="border-t pt-4 pb-2 cursor-pointer"
              >
                <div className="text-center mb-2 text-sm text-gray-200 flex items-center justify-center gap-2">
                  Show Add-ons <ChevronDown className="w-7 h-7" />
                </div>
              </div>
            )}

            {open && (
              <>
                <div className="border-t pt-4 pb-2">
                  <div className="text-center mb-2 text-sm text-white/90">
                    HBO Max
                  </div>
                  <div className="flex justify-between px-4 text-sm">
                    <div><img src={checkmark} alt="checkmark" className="inline" /></div>
                    <div><img src={checkmark} alt="checkmark" className="inline" /></div>
                  </div>
                </div>
                <div className="border-t pt-4 pb-2">
                  <div className="text-center mb-2 text-sm text-white/90">
                    CINEMAX®
                  </div>
                  <div className="flex justify-between px-4 text-sm">
                    <div><img src={checkmark} alt="checkmark" className="inline" /></div>
                    <div><img src={checkmark} alt="checkmark" className="inline" /></div>
                  </div>
                </div>
                <div className="border-t pt-4 pb-2">
                  <div className="text-center mb-2 text-sm text-white/90">
                    Paramount+ with SHOWTIME
                  </div>
                  <div className="flex justify-between px-4 text-sm">
                    <div><img src={checkmark} alt="checkmark" className="inline" /></div>
                    <div><img src={checkmark} alt="checkmark" className="inline" /></div>
                  </div>
                </div>
                <div className="border-t pt-4 pb-2">
                  <div className="text-center mb-2 text-sm text-white/90">
                    Starz
                  </div>
                  <div className="flex justify-between px-4 text-sm">
                    <div><img src={checkmark} alt="checkmark" className="inline" /></div>
                    <div><img src={checkmark} alt="checkmark" className="inline" /></div>
                  </div>
                </div>

                <div
                  onClick={() => setOpen(false)}
                  className="border-t pt-4 pb-2 cursor-pointer"
                >
                  <div className="text-center mb-2 text-sm text-gray-200 flex items-center justify-center gap-2">
                    Hide Add-ons <ChevronUp className="w-7 h-7" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
