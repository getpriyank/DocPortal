import { navBarItems } from "../constants";
import StaticText from "./StaticText";
import video from "../assets/background.mp4";
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
      <video
        className="absolute top-0 left-0 min-h-full min-w-full z-0 object-cover"
        autoPlay
        muted
        loop
        src={video}
        type="video/mp4"
      />
      <div className="relative z-10 flex flex-col justify-around min-h-screen pt-20 w-full">
        <StaticText text={topLevelItems?.content} />
        <div className="flex flex-wrap justify-around py-8 px-3 gap-2">
          {navSubMenu?.map((navBaritem) => {
            return <FlipCard key={navBaritem.id} {...navBaritem} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
