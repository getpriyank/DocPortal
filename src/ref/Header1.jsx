import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.png";
import { navBarItems } from "../constants";
import { useState } from "react";
import SubMenu from "./SubMenu";

const Title = () => {
  return (
    <a href="/">
      <img src={logoImage} alt="logo" className="h-6 w-28" />
    </a>
  );
};

const Header = () => {
  const [hoverStatus, setHoverStatus] = useState(false);
  const handleMouseOver = (val) => {
    setHoverStatus(true);
    console.log("Called", val);
  };
  const handleMouseOut = () => {
    setHoverStatus(false);
  };
  return (
    <>
      <div className="flex justify-between py-6 bg-black text-white px-10 fixed w-full z-40">
        <Title />
        <div className="flex font-normal text-base font-sans">
          <ul className="flex justify-around gap-3">
            {navBarItems.map((item) => (
              <Link to={item.link} key={item.id}>
                <li
                  className="hover:text-p-orange  cursor-pointer text-sm font-semibold"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  // onMouseOver={() => setHoverStatus(true)}
                >
                  {item.name.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="right-menu">
          <ul>
            <li className="hover:text-p-orange text-sm font-semibold cursor-pointer">
              {`contact`.toUpperCase()}
            </li>
          </ul>
        </div>
      </div>
      {hoverStatus && (
        <div onMouseOver={() => setHoverStatus(true)}>
          <SubMenu />
        </div>
      )}
    </>
  );
};

export default Header;
