import React, { useState } from "react";
import { RiSearchLine, RiMenuLine, RiArrowDownSLine, RiQuestionLine } from "@remixicon/react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.svg";
import AsideMenu from "./utils/AsideMenu";
import SearchOverlay from "./utils/SearchOverlay";
import { navItems } from "../../data/menuItems";

const Header: React.FC = () => {
  const [isAsideOpen, setAsideOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleAside = () => setAsideOpen(!isAsideOpen);
  const toggleSearch = () => setSearchOpen(!isSearchOpen);

  return (
    <>
      <header className="bg-[#3c44d7] text-white w-full fixed top-0 z-[9999]">
        <div
          className="container mx-auto flex justify-between items-center py-6 px-6"
          data-aos="fade-down"
        >

          <div className="flex items-center lg:gap-10 md:gap-8 gap-6">
            <figure className="flex items-center gap-3">
              <div className="lg:hidden flex">
                <RiMenuLine
                  className="text-white cursor-pointer hover1 p-2"
                  onClick={toggleAside}
                  size={40}
                />
              </div>
              <Link to="/">
                <img className="md:w-36 w-24" src={Logo} alt="logo" />
              </Link>
            </figure>
            <nav className="hidden lg:flex xl:space-x-8 lg:space-x-4">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div key={index} className="relative dropdown">
                    <a className="p linkhover flex items-center">
                      {item.label}
                      <RiArrowDownSLine className="text-xs pt-1" />
                    </a>
                    <div className="absolute left-0 mt-2 w-48 text-primary bg-background-secondaryBg shadow-lg dropdown-menu py-3 px-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          className="block px-4 py-2 linkhover p"
                          to={subItem.path}
                          end
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink key={index} className="p linkhover" to={item.path} end>
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <RiSearchLine
              className="text-white cursor-pointer text-xl linkhover"
              onClick={toggleSearch}
            />
            <button className="hover1 xl:flex gap-1 hidden">
              <RiQuestionLine />
              Pregunta en Finect</button>
            <hr className="w-[2px] h-10 bg-borderColor mx-4" />
            <button className="hover2">
              Identifícate
            </button>
          </div>

        </div>
        <AsideMenu isOpen={isAsideOpen} toggleAside={toggleAside} navItems={navItems} />
        <SearchOverlay isOpen={isSearchOpen} toggleSearch={toggleSearch} />
      </header>
    </>
  );
};

export default Header;