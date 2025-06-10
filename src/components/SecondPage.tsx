import img1 from "../assets/image_1.jpeg";
import img2 from "../assets/image_2.jpeg";
import img3 from "../assets/image_3.jpeg";
import img4 from "../assets/image_4.jpeg";
import { ButtonGreenLong } from "./Button";

const SecondPage = () => {
  return (
    <div className="bg-black md:mt-[4.6rem] p-4 text-center justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center p-16">
        <div className=" md:w-[50%]">
          <p className="text-green-400 pb-4">INCLUDED IN ALL PLANS</p>
          <h1 className="text-white md:text-[4rem] text-3xl font-bold pb-4">
            All The TV You Love
          </h1>
          <p className="text-white text-lg pb-4">
            Watch full seasons of exclusive streaming series, current-season
            episodes, hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
      </div>

      {/* images */}

      <div className="md:gap-8 gap-4 grid grid-cols-2 md:grid-cols-4">
        <img
          src={img1}
          className="w-full h-auto object-contain mx-auto rounded-xl hover:border-4 hover:border-gray-500 hover:rounded-xl transition transform hover:scale-110 duration-300 "
          alt="image1"
        />
        <img
          src={img2}
          className="w-full h-auto object-contain mx-auto rounded-xl hover:border-4 hover:border-gray-500 hover:rounded-xl transition transform hover:scale-110 duration-300"
          alt="image2"
        />
        <img
          src={img3}
          className="w-full h-auto object-contain mx-auto rounded-xl hover:border-4 hover:border-gray-500 hover:rounded-xl transition transform hover:scale-110 duration-300 marker:rounded-xl"
          alt="image3"
        />
        <img
          src={img4}
          className="w-full h-auto object-contain mx-auto hover:border-4 hover:border-gray-500 hover:rounded-xl transition transform hover:scale-110 duration-300 rounded-xl"
          alt="image4"
        />
      </div>

      <div className="mt-24 w-full flex justify-center items-center">
        <div className="md:w-[60%]">
          <p className="text-green-400 pb-4">
            TRY HULU (WITH ADS) + LIVE TV FREE FOR 3 DAYS
          </p>
          <h1 className="text-white md:text-[3.3rem] text-3xl font-bold pb-4">
            Watch Live TV From 95+ Channels
          </h1>
          <p className="text-white md:text-[17px] mb-4 leading-tight">
            Get top national and local channels on Hulu (With Ads) + Live TV
            with your favorite live sports, news, and events - plus the entire
            Hulu streaming library. With Unlimited DVR, store Live TV recordings
            for up to nine months and fast-forward through your DVR content.
            Includes access to endless entertainment with Disney+ and live
            sports with ESPN+.
          </p>
          <ButtonGreenLong text="Start your free trial" />
          <p className="text-[10px] text-gray-400 my-4">Hulu (With Ads) + Live TV plan $82.99/mo. after 3-day free trial (if any) unless canceled. Cancel anytime. Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. Offer valid for eligible subscribers only. See details.</p>

          <p className="mb-24"><a href="#" className="underline text-gray-300 md:text-md text-sm mt-4">VIEW CHANNELS IN YOUR AREA →</a></p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
