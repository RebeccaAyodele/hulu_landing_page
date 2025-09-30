import { useState } from "react";
import csg from "../assets/live_sports/csg.png";
import espn from "../assets/live_sports/espn.png";
import fs1 from "../assets/live_sports/fs1.svg";
import npl from "../assets/live_sports/npl.png";
import mlb from "../assets/live_sports/mlb.webp";
import abc from "../assets/breaking_news/abc.png";
import cnn from "../assets/breaking_news/cnn.svg";
import msbn from "../assets/breaking_news/msbn.png";
import fox from "../assets/breaking_news/fox.svg";
import earth from "../assets/biggest_events/earth.png";
import globe from "../assets/biggest_events/globe.png";
import grammy from "../assets/biggest_events/grammy.png";
import oscars from "../assets/biggest_events/oscar.png";

const ThirdPage = () => {
  const backgrounds: Record<string, string> = {
    live_sports:
      "bg-[linear-gradient(rgba(0,0,0,0.8)_-39.59%,rgba(0,0,0,0)_117.14%),url('https://cnbl-cdn.bamgrid.com/assets/7a93b953315e186a518a4aa6dcd3792ecb007b8a5c5b1d540828e8bdfb2614f3/original')]",
    breaking_news:
      "bg-[linear-gradient(rgba(0,0,0,0.8)_-39.59%,rgba(0,0,0,0)_117.14%),url('https://cnbl-cdn.bamgrid.com/assets/eb0ee523a953b085a871bf45718d56af260867d95d5489717f20ba7f368fcb68/original')]",
    biggest_events:
      "bg-[linear-gradient(rgba(0,0,0,0.8)_-39.59%,rgba(0,0,0,0)_117.14%),url('https://cnbl-cdn.bamgrid.com/assets/e3074fa0ccb906f6cb625189650bef39513e65579258373f372087f8b0b89f39/original')]",
  };

  const [activePage, setActivePage] = useState("live_sports");

  return (
    <div
      className={`h-screen md:py-[10rem] py-[2rem] flex flex-col md:pl-72 items-center md:items-start md:px-0 px-6 bg-cover bg-center ${backgrounds[activePage]}`}
    >
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
          {/* LIVE SPORT */}
          {activePage === "live_sports" && (
            <div>
              <h1 className="md:text-5xl text-3xl md:text-start text-center my-8 font-bold">
                Live Sports
              </h1>
              <p className="md:text-start text-center text-[17px]">
                Catch your games at home or on the go. Stream live games from
                major college and pro leagues including the NCAA®, NBA, NHL,
                NFL, and more.
              </p>
              <div className="flex md:gap-8 md:justify-start justify-evenly my-6">
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={csg}
                    alt="csg"
                    className="inline-block"
                    style={{ transform: "scaleX(0.8) scaleY(0.6)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={espn}
                    alt="espn"
                    className="inline-block"
                    style={{ transform: "scaleX(1) scaleY(0.6)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={fs1}
                    alt="fs1"
                    className="inline-block"
                    style={{ transform: "scale(0.9)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={npl}
                    alt="npl"
                    className="inline-block"
                    style={{ transform: "scaleX(0.8) scaleY(0.5)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={mlb}
                    alt="npl"
                    className="rounded-full inline-block"
                    style={{ transform: "scaleX(0.9) scaleY(0.7)" }}
                  />
                </div>
              </div>
              <p className="text-[11px] md:text-start text-center text-gray-300 md:px-0 px-4">
                Live TV plan required. Regional restrictions, blackouts and
                additional terms apply.{" "}
                <a className="underline" href="#">
                  See details
                </a>
              </p>
            </div>
          )}

          {/* BREAKING NEWS */}
          {activePage === "breaking_news" && (
            <div>
              <h1 className="md:text-5xl text-3xl md:text-start text-center my-8 font-bold">
                Breaking News
              </h1>
              <p className="md:text-start text-center text-[17px]">
                Keep pace with what's going on locally and globally with trusted
                opinions from all the top news networks.
              </p>
              <div className="flex md:gap-8 md:justify-start justify-evenly my-6">
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={abc}
                    alt="csg"
                    className="inline-block"
                    style={{ transform: "scaleX(0.9) scaleY(0.6)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img src={cnn} alt="espn" className="rounded-full" />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={msbn}
                    alt="fs1"
                    className="inline-block"
                    style={{ transform: "scaleX(0.9) scaleY(0.55)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={fox}
                    alt="npl"
                    className="rounded-full inline-block scale-90"
                  />
                </div>
              </div>
              <p className="text-[11px] md:text-start text-center text-gray-300 md:px-0 px-4">
                Live TV plan required. Regional restrictions, blackouts and
                additional terms apply.{" "}
                <a className="underline" href="#">
                  See details
                </a>
              </p>
            </div>
          )}

          {/* BIGGEST EVENTS */}
          {activePage === "biggest_events" && (
            <div>
              <h1 className="md:text-5xl text-3xl md:text-start text-center my-8 font-bold">
                Biggest Events
              </h1>
              <p className="md:text-start text-center text-[17px]">
                Spectacular, can't-miss moments like the Olympics, Grammys®,
                Oscars®, Emmys®, and more.
              </p>
              <div className="flex md:gap-8 md:justify-start justify-evenly my-6">
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={earth}
                    alt="csg"
                    className="inline-block"
                    style={{ transform: "scaleX(1) scaleY(0.6)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={globe}
                    alt="espn"
                    className="inline-block"
                    style={{ transform: "scaleX(0.9) scaleY(0.5)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={grammy}
                    alt="fs1"
                    className="inline-block"
                    style={{ transform: "scale(0.9)" }}
                  />
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center overflow-hidden bg-white">
                  <img
                    src={oscars}
                    alt="npl"
                    className="inline-block"
                    style={{ transform: "scaleX(0.8) scaleY(0.5)" }}
                  />
                </div>
              </div>
              <p className="text-[11px] md:text-start text-center text-gray-300 md:px-0 px-4">
                Live TV plan required. Regional restrictions, blackouts and
                additional terms apply.{" "}
                <a className="underline" href="#">
                  See details
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
