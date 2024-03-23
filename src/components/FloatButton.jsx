import { FloatButton, Popover } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { quickLinks } from "../constants";

const QuickLinks = () => {
  return (
    <div>
      {/* <h1>Quick Links</h1> */}
      {quickLinks.map((link, id) => {
        return (
          <Link
            to={link.path}
            key={id}
            className="text-blue-400 hover:underline"
          >
            <ul>
              <li>{link.name}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};
const GlobalFloatButton = () => (
  <Popover
    content={QuickLinks}
    title="Quick Links"
    placement="topRight"
    className="hover:bg-orange-400"
  >
    <FloatButton icon={<LinkOutlined />} />
  </Popover>
);
export default GlobalFloatButton;
