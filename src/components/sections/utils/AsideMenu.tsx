import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo.svg";
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react";

interface AsideMenuProps {
  isOpen: boolean;
  toggleAside: () => void;
  navItems: Array<{
    label: string;
    path?: string;
    dropdown?: Array<{ label: string; path: string }>;
  }>;
}

const AsideMenu: React.FC<AsideMenuProps> = ({ isOpen, toggleAside, navItems }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (isOpen) {
      toggleAside();
    }
  }, [location.pathname]);

  return (
    <aside
      className={`lg:hidden fixed inset-0 bg-background-primaryBg text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 overflow-y-scroll aside-menu z-50`}
      id="asideMenu"
    >
      <div className="p-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <figure>
              <img src={Logo} className="w-32 pt-3 pb-7" alt="logo" />
            </figure>
          </Link>
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={toggleAside}
          >
            <RiCloseLine size={30} className="text-white linkhover" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="relative aside-dropdown">
                <a
                  className="cursor-pointer p linkhover flex justify-between"
                  onClick={toggleDropdown}
                >
                  {item.label}
                  <RiArrowDownSLine className="text-xs pt-1" />
                </a>
                <div
                  className={`mt-2 w-48 h-full text-primary rounded-lg dropdown-menu bg-transparent overflow-visible ${dropdownOpen ? "open" : "hidden"
                    }`}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      className="block py-2 linkhover p"
                      to={subItem.path}
                      end
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              item.path && (
                <NavLink key={index} className="p linkhover" to={item.path} end>
                  {item.label}
                </NavLink>
              )
            )
          )}
        </nav>
      </div>
    </aside>
  );
};

export default AsideMenu;