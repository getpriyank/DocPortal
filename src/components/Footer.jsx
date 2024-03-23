import { Link } from "react-router-dom";
import { partners, quickLinks } from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-row bg-black p-5 justify-around">
      <div className="flex flex-col text-white">
        <ul>
          <h1 className="text-white text-xl font-semibold mb-2">Partners</h1>
          {/* <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" /> */}
          {partners.map((partner, id) => {
            return (
              <>
                <ul key={id}>
                  <li className="text-[#FFFFFF99] mb-1">{partner?.name}</li>
                  <ul>
                    {partner.subPartner &&
                      partner?.subPartner.map((subPartner, id) => {
                        return (
                          <li className="text-[#FFFFFF99] ml-3" key={id}>
                            {subPartner}
                            <br />
                          </li>
                        );
                      })}
                  </ul>
                </ul>
              </>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col text-white">
        <h1 className="text-white text-xl font-semibold mb-1">Quick Links</h1>
        {quickLinks.map((link, id) => {
          return (
            <Link to={link.path} key={id} className=" hover:underline">
              <ul>
                <li className="text-[#FFFFFF99] mb-1">{link.name}</li>
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
