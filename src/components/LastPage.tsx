import facebook from "../assets/facebook.svg"
import x from "../assets/x_logo.svg"
import youtube from "../assets/youtube.svg"
import instagram from "../assets/instagram.svg"

const LastPage = () => {
  return (
    <div className="md:px-36 px-8 py-16 text-gray-500">
      <div className="md:flex hidden justify-evenly mb-28">
        <div>
          <ul className="text-sm gap-2 w-[10rem]">
            <p className="text-gray-700 font-semibold text-xs">BROWSE</p>
          <li className="p-[5px]">Streaming Library</li>
          <li className="p-[5px]">Live TV</li>
          <li className="p-[5px]">Live News</li>
          <li className="p-[5px]">Live Sports</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm gap-2 w-[10rem]">
          <li className="p-[5px]">TV Shows</li>
          <li className="p-[5px]">Movies</li>
          <li className="p-[5px]">Originals</li>
          <li className="p-[5px]">Networks</li>
          <li className="p-[5px]">Kids</li>
          <li className="p-[5px]">FX</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm gap-2 w-[10rem]">
          <li className="p-[5px]">Max</li>
          <li className="p-[5px]">CineMax</li>
          <li className="p-[5px]">Paramount+ with SHOWTIME</li>
          <li className="p-[5px]">Starz</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm gap-2 w-[10rem]">
          <li className="p-[5px]">Disney+, Hulu, ESPN+ Bundle Basics</li>
          <li className="p-[5px]">Disney+, Hulu, ESPN+ Bundle Premium</li>
          <li className="p-[5px]">Disney+, Hulu Bundle</li>
          <li className="p-[5px]">Disney+, Hulu, Max Basics</li>
          <li className="p-[5px]">Student Discount</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm gap-2 w-[10rem]">
          <p className="text-gray-700 font-semibold text-xs">HELP</p>
          <li className="p-[5px]">Account & Billing</li>
          <li className="p-[5px]">Plans & Pricing</li>
          <li className="p-[5px]">Supported Devices</li>
          <li className="p-[5px]">Accessibility</li>
          </ul>
        </div>
        <div>
        <ul className="text-sm gap-2 w-[10rem]">
        <p className="text-gray-700 font-semibold text-xs">ABOUT US</p>
          <li className="p-[5px]">Shop Hulu</li>
          <li className="p-[5px]">Press</li>
          <li className="p-[5px]">Jobs</li>
          <li className="p-[5px]">Contact</li>
          <li className="p-[5px]">Guides | What to Watch</li>
          </ul>
        </div>
      </div>

      <div>

      </div>

      <div className="border-t">
        <div className="flex gap-6 pt-12">
          <img src={facebook} alt="facebook" />
          <img src={x} alt="x" />
          <img src={youtube} alt="youtube" />
          <img src={instagram} alt="instagram" />
        </div>

        <div className="text-xs md:justify-between gap-4 md:gap-0 flex flex-wrap my-6">
          <p>© 2025 Hulu, LLC</p>
          <p>About Ads</p>
          <p>Subscriber Agreement</p>
          <p>Privacy Policy</p>
          <p>Do Not Sell or Share My Personal Information</p>
          <p>Your US State Privacy Rights</p>
          <p>TV Parental Guidelines</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default LastPage;