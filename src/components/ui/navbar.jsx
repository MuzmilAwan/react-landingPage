import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="max-w-[1440px] min-w-[300px] mx-auto bg-bg-primary px-4 py-3 sm:px-6 md:px-10 md:py-5 lg:px-16 lg:py-6 xl:px-20 overflow-hidden flex justify-between">
      <div className="w-full flex items-center justify-between ">

        <div className="w-[90px] sm:w-[108px] h-auto flex items-center">
          <img src="/homePage/navbar/logo.svg" alt="Breakio logo mark image" className="w-full h-full" />
        </div>

        <div className="w-[547px] h-[48px] md:flex hidden md:items-center justify-center  ">

          <ul className="w-full h-[48px] flex items-center text-dark gap-4 lg:pl-[80px] pl-[60px]">

            <li >
              <NavLink to="/explore" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> Explore </NavLink>
            </li>

            <li >
              <NavLink to="/solutions" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> Solution </NavLink>
            </li>

            <li >
              <NavLink to="/about" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> About </NavLink>
            </li>

            <li >
              <NavLink to="/blog" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> Blog </NavLink>
            </li>

            <li>
              <NavLink to="/login" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> Log In </NavLink>
            </li>

          </ul>

          <div className="w-[132px] h-[48px]">
            <button className="w-[132px] h-[48px] bg-btn text-bg-primary font-medium text-base leading-[24px] tracking-[0.5px] rounded-[18px] p-[12px] cursor-pointer"> Start Now </button>
          </div>

        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='w-6 h-6 md:hidden flex items-center justify-center' aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <img src="/homePage/navbar/hambBurg.svg" alt="hambburg icon" className="w-full h-full" />
        </button>


      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[60px] bg-bg-primary z-50 ">
          
          <ul className="w-full flex flex-col items-start gap-4 p-6">

            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/explore" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> Explore </NavLink>
            </li>

            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/solutions" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> Solution </NavLink>
            </li>

            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/about" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> About </NavLink>
            </li>

            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/blog" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> Blog </NavLink>
            </li>

            <li>
              <NavLink onClick={() => setIsMenuOpen(false)} to="/login" className="  text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]"> Log In </NavLink>
            </li>



          </ul>
        </div>
      )}

    </nav>
  );
};
