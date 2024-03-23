import { useState } from "react";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";

const items = [
  {
    label: " Adoption",
    key: "adoption",
  },
  {
    label: "Use Cases",
    key: "usecases",
  },
  {
    label: " Solutions",
    key: "solutions",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "option1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: <Link>Skills</Link>,
    key: "skills",
  },
];
const App = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(`/${e.keyPath[0]}`);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ background: "black", color: "white" }}
        disabledOverflow
      />
    </>
  );
};
export default App;
