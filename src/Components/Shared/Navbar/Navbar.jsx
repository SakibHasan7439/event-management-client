import { NavLink } from "react-router";
import PrimaryButton from "../Primary-button/PrimaryButton";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full h-[100px] z-50 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"event"}>Events</NavLink>
            <NavLink to={"add-event"}>AddEvent</NavLink>
            <NavLink to={"my-event"}>MyEvents</NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="website logo" className="w-14 h-14" />
          <div>
            <h3 className="company-name font-bold text-2xl">Harmoni</h3>
            <p className="text-[#ffbe30] uppercase font-semibold">
              event management
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLink className={"navItems"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"navItems"} to={"event"}>
            Events
          </NavLink>
          <NavLink className={"navItems"} to={"add-event"}>
            AddEvent
          </NavLink>
          <NavLink className={"navItems"} to={"my-event"}>
            MyEvents
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <PrimaryButton 
        variant="primary" size="lg" type="button">
          Signin
        </PrimaryButton>
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
