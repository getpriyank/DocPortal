import { toolsData } from "../constants";
import StaticText from "../components/StaticText";
import video from "../assets/background.mp4";
import FlipCard from "../components/FlipCard";
const GenAI = () => {
  const text =
    "Generative AI Solutions to achieve Engineering Excellence through developer productivity Improvements across the delivery life cycle";
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
        <StaticText text={text} />
        <div className="flex flex-wrap justify-around py-8 px-3 gap-2">
          {toolsData.map((dataObj) => {
            return <FlipCard key={dataObj.id} {...dataObj} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default GenAI;
