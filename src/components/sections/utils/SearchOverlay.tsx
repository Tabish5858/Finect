import React from "react";
import { RiCloseLine } from "@remixicon/react";

interface SearchOverlayProps {
  isOpen: boolean;
  toggleSearch: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  toggleSearch,
}) => {
  return (
    <div
    id="searchOverlay"
    className={`fixed inset-0 items-center justify-center search-overlay backdrop-blur-md bg-black/30 z-[999] ${
    isOpen ? "flex" : "hidden"
    }`}
>
      <button
        className="absolute top-4 right-4 hover2"
        onClick={toggleSearch}
      >
        <RiCloseLine className="text-white linkhover" size={30} />
      </button>
      <div
        className={`p-4 rounded-lg lg:w-2/3 w-11/12 relative ${
          isOpen ? "animate-slideDown" : "animate-slideUp"
        }`}
      >
        <form className="flex relative z-100">
          <input
            className="w-full p-4 rounded-l-xl text-white bg-background-buttonbg border border-solid border-secondary"
            placeholder="Search..."
            type="text"
            required
            name="search"
          />
          <button className="bg-secondary hover:bg-background-gradientMain text-white p-4 rounded-r-lg transition-all border border-solid border-secondary hover:border-[#FF5277]">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchOverlay;