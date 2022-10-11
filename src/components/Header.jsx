import React from "react";
import NavIcon from "./NavIcon.jsx";
import { FaHome, FaBeer, FaProjectDiagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-700">
      <h1 className="text-secondary font-bold text-6xl pt-8 pb-8">
        Welcome to Color Guesser
      </h1>
      <nav>
        <ul className="flex flex-row">
          <li className="nav-icon">
            <NavIcon icon={<FaHome />} iconName={"home"} />
          </li>
          <li className="nav-icon">
            <NavIcon icon={<FaBeer />} iconName={"inspiration"} />
          </li>
          <li className="nav-icon">
            <NavIcon icon={<FaProjectDiagram />} iconName={"projects"} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
