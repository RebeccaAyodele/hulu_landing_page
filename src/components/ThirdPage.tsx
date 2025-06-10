import { useState } from "react";

const ThirdPage = () => {
  const [activePage, setActivePage] = useState("live_sports");

  return (
    <div className="bg-green-800/60 py-[10rem]">
      <div className="w-[60%] flex justify-center flex-col items-center">
        <nav className="flex gap-4 p-4">
          <button
            className={`text-white text-sm font-bold pb-8 border-b-4 transition-all duration-500 ${
              activePage === "live_sports"
                ? "border-white"
                : "border-transparent"
            }`}
            onClick={() => setActivePage("live_sports")}
          >
            LIVE SPORTS
          </button>
          <button
            className={`text-white text-sm font-bold pb-8 border-b-4 transition-all duration-500 ${
              activePage === "breaking_news"
                ? "border-white"
                : "border-transparent"
            }`}
            onClick={() => setActivePage("breaking_news")}
          >
            BREAKING NEWS
          </button>
          <button
            className={`text-white text-sm font-bold pb-8 border-b-4 transition-all duration-500 ${
              activePage === "biggest_events"
                ? "border-white"
                : "border-transparent"
            }`}
            onClick={() => setActivePage("biggest_events")}
          >
            BIGGEST EVENTS
          </button>
        </nav>

        <div className="p-4 text-white">
          {activePage === "live_sports" && (
            <div>
              <h1 className="text-[4rem] font-bold">Live Sports</h1>
              <p>
                Catch your games at home or on the go. Stream live games from
                major college and pro leagues including the NCAA®, NBA, NHL,
                NFL, and more.
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
