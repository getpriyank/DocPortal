import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const path = useLocation().pathname;
  if (path === "/") return;

  const pathArray = path.split("/");
  const itemsArray = pathArray.map((pathItem, i, arr) => {
    const breadCrumbPath = arr.slice(0, i + 1);
    if (pathItem === "") return { title: <Link to={"/"}>Home</Link> };
    return { title: <Link to={breadCrumbPath.join("/")}>{pathItem}</Link> };
  });

  return (
    <Breadcrumb
      className="font-semibold text-black pl-3 mt-20 "
      items={itemsArray}
    />
  );
};
export default Breadcrumbs;
