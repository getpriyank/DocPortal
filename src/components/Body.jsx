import { navBarItems } from "../constants";
import StaticText from "./StaticText";
import video from "../assets/background.mp4";
import FlipCard from "./FlipCard";
const Body = () => {
  const text = "";
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
      <div className="relative z-10 flex flex-col justify-around min-h-screen bg-slate-500 pt-20 w-full">
        <StaticText text={text} />
        <div className="flex flex-wrap justify-around py-8 px-3 gap-2">
          {navBarItems.map((dataObj) => {
            return <FlipCard key={dataObj.id} {...dataObj} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;
