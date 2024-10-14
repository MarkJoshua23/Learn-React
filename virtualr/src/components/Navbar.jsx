import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "./../constants/index";
import { useState } from "react";

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleNavBar = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  //space x is the spacing between
  //always w-full if the drawer is not using all width
  //use w-fit h-fit if you want container size to be based on size of content
  //drawer escapes the flex of container because of FIXED positioning
  //justify between pushes elements to side
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-sm border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-5 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden ">
            <button onClick={toggleNavBar}>
              {drawerIsOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div className={` fixed top-16 ${drawerIsOpen ? "right-0" : "right-[-500px]"} transition-all h-fit z-20 w-fit bg-neutral-900 px-10 py-4  flex flex-col justify-center items-center lg:hidden`}>
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index} className="py-4">
                  <a href={item.href} className="hover:text-orange-500">{item.label}</a>
                </li>
              );
            })}
            <li className="py-4">
              <a href="#" className="hover:text-orange-500">Sign In</a>
            </li>
            <li className="py-4">
              <a href="#" className="hover:text-orange-500">Create an account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
