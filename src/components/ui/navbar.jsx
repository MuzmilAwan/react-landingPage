import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="md:w-full md:h-96px w-393px h-67px bg-bg-primary md:py-[24px] md:px-[80px] p-4 overflow-hidden flex justify-between">
      <div className="w-full flex items-center justify-between ">

        <div className="max-w-108px h-35px flex items-center">
          <img src="/homePage/navbar/logo.svg" alt="Breakio logo mark" />
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
            <button className="w-[132px] h-[48px] bg-btn text-bg-primary font-medium text-base leading-[24px] tracking-[0.5px] rounded-[18px] p-[12px]"> Start Now </button>
          </div>

        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='w-24px h-24px md:hidden flex' aria-label="Toggle menu" aria-expanded={isMenuOpen}
        >
          <img src="/homePage/navbar/handBurg.svg" alt="" className="w-full h-full pointer-events-none" />
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

