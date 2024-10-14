//this import works because of index.js in assets folder (barrel file)
import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
//to get the navigation and render them easily by using map
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";
import Button from "./Button";
import MenuSvg from "./../assets/svg/MenuSvg";
import { useState } from "react";
import { disablePageScroll } from "scroll-lock";
import { enablePageScroll } from "scroll-lock";

const Header = () => {
  //useLocation to use pathnName.hash to determine the current clicked tab so you can put HIGHLIGHT on it or any styling
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  //DRY use map to not repeat styling
  //"fixed top-0 left-0" - always for navbar that pins to top lefmost
  //w-full to use all width space
  //m-auto in tabs uses all available space pushing signup to the right
  //ml-auto pushes it to the rightmost since margin left is auto
  // backdrop-blur-sm - glassy look
  //if theres FLEX there should be items-....
  //use onlyMobile bool to determine what should be the only displayed in mobile
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>

        <Button className=" hidden lg:flex" href="#login">
          Sign In
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
