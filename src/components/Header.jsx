import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux/sidebarSlice";
import { useEffect, useState } from "react";
import { SEARCH_API } from "../Utils/constants";
import { cachedResults } from "../redux/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const fetchSuggestions = async () => {
    console.log("API CALL", searchQuery);
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();

    //console.log("json", json[1]);
    setSuggestions(json[1]);
    dispatch(cachedResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const hadleClick = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className=" grid grid-flow-col p-0 m-1 shadow-lg">
      <div className="flex items-center justify-start col-span-1">
        <img
          alt="menu"
          className="h-8  cursor-pointer"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png"
          onClick={hadleClick}
        />
        <img
          alt="icon"
          className="h-20 w-28 ml-3"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"
        />
      </div>
      <div className="col-span-10 mt-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-1/2 p-2 border-2 border-solid rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        {suggestions?.length > 0 && showSuggestions && (
          <div className="absolute bg-white w-[35rem]">
            {suggestions.map((data, index) => (
              <div
                key={index}
                className="px-4 py-2 text-md font-medium text-black hover:bg-gray-100 cursor-pointer"
              >
                🔍 {data}
              </div>
            ))}
          </div>
        )}

        <button className="border border-gray-400 p-2 text-md bg-gray-200 rounded-r-full">
          Search
        </button>
      </div>

      <div>
        <img
          className="h-12 col-span-1"
          alt="icon"
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
