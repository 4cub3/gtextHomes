import React, { useContext, useState, useEffect } from "react";
import logo from "../../assets/images/gtext-white-logo.0e49f14.png";
import { NavBarContext } from "../../context/NavbarContext/navBarContext";
import { Link, useMatch } from "react-router-dom";
import useMediaQuery from "../../hooks/mediaQuery";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
const NavBar: React.FC = () => {
  const { selectedPage, selectHandler } = useContext(NavBarContext);
  const [page, setPage] = useState('/home')
  const matches = useMatch("/home");

  useEffect(()=>{
    if(selectedPage){
      setPage(selectedPage)
    }
  },[selectedPage])

  const isAboveMediumScreen = useMediaQuery("(min-width:1024px)");
  const [isNav, setIsNav] = useState(false);
  const links: string[] = [
    "home",
    "About Us",
    "Our Portfolio",
    "Visit Us",
    "Contact Us",
  ];

  const listLink = links.map((link, idx) => {
    const lowerCasePage = link.trim().replace(/ /g, "").toLowerCase();
    return (
      <li key={idx}>
        <Link
          to={`/${lowerCasePage}`}
          className={`p-4 transition-all duration-200 hover:border-b-2 ${
            page === lowerCasePage && "border-b-2 border-black"
          } ${
            matches?.pathname === "/home"
              ? "border-white text-white hover:border-white"
              : " "
          }
          
        ${!isAboveMediumScreen && isNav && "border-white text-white"}`}

          onClick={() => {
            selectHandler(lowerCasePage);
          }}
        >
          {link}
        </Link>
      </li>
    );
  });
  return (
    <>
      <nav
        className={`absolute top-0 z-[999] w-full overflow-hidden px-10 py-8 ${matches?.pathname === '/home'? '': 'relative'}`}
        id="home"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <figure className=" w-28 md:w-auto">
            <Link to="/home">
              <img
                src={logo}
                alt="Gtext-logo"
                className={`${matches?.pathname && " brightness-0 invert"}`}
              />
            </Link>
          </figure>
          {isAboveMediumScreen ? (
            <ul
              className={`flex items-center gap-20 border-b py-[0.8rem] ${
                matches?.pathname === "/home" ? " border-white" : "border-black"
              }`}
            >
              {listLink}
            </ul>
          ) : (
            <button
              onClick={() => {
                setIsNav((prev) => !prev);
              }}
            >
              <Bars2Icon
                className={`h-12 w-12 ${
                  matches?.pathname === "/home" ? "text-white" : "text-black"
                }`}
              />
            </button>
          )}
        </div>
      </nav>
      {!isAboveMediumScreen && isNav && (
        <nav className="fixed top-0 z-[999] h-screen w-full px-10 py-8">
          <div className="mx-auto flex h-full max-w-[1200px] flex-col justify-between ">
            <ul
              className={`absolute right-0 top-0 h-full w-4/5 max-w-[32rem]  space-y-14 self-end border-b bg-blue-10 p-20 ${
                matches?.pathname === "/home" ? " border-white" : "border-black"
              }`}
            >
              <button
                onClick={() => {
                  setIsNav((prev) => !prev);
                }}
              >
                <XMarkIcon className="h-12 w-12 text-white " />
              </button>
              {listLink}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
