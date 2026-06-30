import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useStore from "../../store/userStore.js";
import { logoutApi } from "../../services/servicesApi.js";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData, isLoading } = useStore();
  const navigate = useNavigate();

  const handleLogout = async () => {

    setIsMenuOpen(false);
    const result = await logoutApi();
    if (result.success) {
      navigate("/login");
    } else {
      alert("Logout failed. Please try again.");
    }

  }

  const navLinks = [

    { to: "/explore", label: "Explore" },
    { to: "/solutions", label: "Solution" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/login", label: "Login" }

  ]

  const linkClass = "text-text-dark font-medium text-base leading-[24px] tracking-[0.5px]";

  return (
    <nav className="max-w-[1440px] min-w-[300px] mx-auto bg-bg-primary px-4 py-3 sm:px-6 md:px-10 md:py-5 lg:px-16 lg:py-6 xl:px-20 overflow-hidden flex justify-between">

      <div className="w-full flex items-center justify-between">

        <div className="w-[90px] sm:w-[108px] h-auto flex items-center">
          <img src="/homePage/navbar/logo.svg" alt="Breakio logo" className="w-full h-full" />
        </div>

        <div className="w-[547px] h-[48px] md:flex hidden md:items-center justify-center ">
          <ul className="w-full h-[48px] flex items-center gap-4 lg:pl-[80px] pl-[60px]">

            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={linkClass}>{label}</NavLink>
              </li> ))}

            {!userData && (
              <li>
                <NavLink to="/login" className={linkClass}>Log In</NavLink>
              </li>)}

          </ul>

          <div className="w-[132px] h-[48px]">
            {/* {userData ? ( */}
              <button
                onClick={handleLogout}
                disabled={isLoading}
                className="w-[132px] h-[48px] bg-btn text-bg-primary font-medium text-base leading-[24px] tracking-[0.5px] rounded-[18px] p-[12px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition">
                {isLoading ? "..." : "Logout"}
              </button>

          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-6 h-6 md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}>
          <img src="/homePage/navbar/hambBurg.svg" alt="menu icon" className="w-full h-full" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[60px] bg-bg-primary z-50">
          <ul className="w-full flex flex-col items-start gap-4 p-6">

            {navLinks.map(({ to, label }) => (

              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={linkClass}>
                  {label}
                </NavLink>
              </li>))}

            {userData ? (

              <li className="w-full">
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="w-full bg-btn text-bg-primary font-medium text-base py-3 rounded-[18px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition">
                  {isLoading ? "Logging out..." : "Logout"}
                </button>
              </li>

            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className={linkClass}
                  >
                    Log In
                  </NavLink>
                </li>

                <li className="w-full">
                  <NavLink to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-btn text-bg-primary font-medium text-base py-3 rounded-[18px] cursor-pointer">
                      Start Now
                    </button>
                  </NavLink>
                </li>

              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}