import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Navigation from "../components/Navbar/Navigation";

const Title = () => {
  return (
    <Link to="/">
      <img src={logo} alt="persistent-logo" className="h-6 w-36" />
    </Link>
  );
};

const Contact = () => {
  return (
    <Link to="/contact">
      <span className="hover:text-p-orange text-sm font-semibold cursor-pointer">
        {`Contact`}
      </span>
    </Link>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between bg-black py-4 px-10 fixed z-40 w-full text-white items-center">
      <Title />
      <Navigation />
      {/* <AntNav /> */}
      <Contact />
    </div>
  );
};

export default Header;
