import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.png";
import { navBarItems } from "../constants";

const Title = () => {
  return (
    <a href="/">
      <img src={logoImage} alt="logo" className="h-6 w-28" />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <div className="flex justify-between py-6 bg-black text-white px-10 fixed w-full z-40">
        <Title />
        <div className="flex font-normal text-base font-sans">
          <ul className="flex justify-around gap-3">
            {navBarItems.map((item) => (
              <Link to={item.link} key={item.id}>
                {item.name}
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
    </>
  );
};

export default Header;
