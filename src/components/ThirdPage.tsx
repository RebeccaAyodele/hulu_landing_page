import { useState } from "react";
import csg from "../assets/live_sports/csg.png";
import espn from "../assets/live_sports/espn.png";
import fs1 from "../assets/live_sports/fs1.svg"
import npl from "../assets/live_sports/npl.png";
import mlb from "../assets/live_sports/mlb.webp"
import abc from "../assets/breaking_news/abc.png"
import cnn from "../assets/breaking_news/cnn.svg"
import msbn from "../assets/breaking_news/msbn.svg"
import fox from "../assets/breaking_news/fox.svg"
import earth from "../assets/biggest_events/earth.png"
import globe from "../assets/biggest_events/globe.png"
import grammy from "../assets/biggest_events/grammy.png"
import oscars from "../assets/biggest_events/oscar.png"

const ThirdPage = () => {
  const [activePage, setActivePage] = useState("live_sports");

  return (
    <div className="bg-green-800/60 h-screen md:py-[10rem] py-[2rem] flex flex-col md:pl-72 items-center md:items-start md:px-0 px-6">
      <div className="md:w-[40%] w-full">
        <nav className="flex md:justify-start justify-center gap-4 md:p-0 p-4">
          <button
            className={`text-gray-300 text-sm font-bold pb-2 md:border-b-[6px] border-b-[8px] transition-all duration-500 ${
              activePage === "live_sports"
                ? "border-white, text-white"
                : "border-transparent"
            }`}
            onClick={() => setActivePage("live_sports")}
          >
            LIVE SPORTS
          </button>
          <button
            className={`text-gray-300 text-sm font-bold pb-2 md:border-b-[6px] border-b-[8px]  transition-all duration-500 ${
              activePage === "breaking_news"
                ? "border-white, text-white"
                : "border-transparent"
            }`}
            onClick={() => setActivePage("breaking_news")}
          >
            BREAKING NEWS
          </button>
          <button
            className={`text-gray-300 text-sm font-bold pb-2 md:border-b-[6px] border-b-[8px]  transition-all duration-500 ${
              activePage === "biggest_events"
                ? "border-white, text-white"
                : "border-transparent"
            }`}
            onClick={() => setActivePage("biggest_events")}
          >
            BIGGEST EVENTS
          </button>
        </nav>

        <div className="mx-auto text-white">
          {activePage === "live_sports" && (
            <div>
              <h1 className="md:text-5xl text-3xl md:text-start text-center my-8 font-bold">Live Sports</h1>
              <p className="md:text-start text-center text-[17px]">
                Catch your games at home or on the go. Stream live games from
                major college and pro leagues including the NCAA®, NBA, NHL,
                NFL, and more.
              </p>
              <div className="flex justify-evenly my-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <img
                  src={csg}
                  alt="csg"
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <img
                  src={espn}
                  alt="espn"
                  className="rounded-full w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <img
                  src={fs1}
                  alt="fs1"
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <img
                  src={npl}
                  alt="npl"
                  className="rounded-full w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <img
                  src={mlb}
                  alt="npl"
                  className="rounded-full w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              </div>
              <p className="text-[11px] md:text-start text-center text-gray-300 md:px-0 px-4">
                Live TV plan required. Regional restrictions, blackouts and
                additional terms apply. <a className="underline" href="#">See details</a>
              </p>
            </div>
          )}
          {activePage === "breaking_news" && <div>This is the About page</div>}
          {activePage === "biggest_events" && (
            <div>This is the Contact page</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
