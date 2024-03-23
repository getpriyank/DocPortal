import { navBarItems } from "../constants";
import StaticText from "./StaticText";
import FlipCard from "./FlipCard";
import { useParams } from "react-router-dom";
const HomePage = () => {
  const { name } = useParams();

  const topLevelItems = navBarItems.find((item) => {
    console.log(item.name.toLowerCase());
    console.log(name);
    return item.name.toLowerCase().replaceAll(" ", "") === name;
  });
  const navSubMenu = topLevelItems?.subMenu;

  return (
    <div className="relative">
      <div className="relative z-10 flex flex-col justify-around w-full">
        <StaticText text={topLevelItems?.content} />
        <div className="flex flex-wrap justify-around my-3 px-3 pt-20 gap-2">
          {navSubMenu?.map((navBaritem) => {
            return <FlipCard key={navBaritem.id} {...navBaritem} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
