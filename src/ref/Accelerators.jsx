import { toolsData } from "../constants";
import StaticText from "../components/StaticText";
import video from "../assets/background.mp4";
import FlipCard from "../components/FlipCard";
import ToolsImage from "../assets/accelerators.jpg";

const Accelerators = () => {
  return (
    <>
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
          <StaticText
            text={toolsData?.content}
            heading={"SDLC Tools Aand Accelerators"}
          />

          <div className="flex flex-wrap justify-around py-8 px-3 gap-2">
            {toolsData.map((navBaritem) => {
              return <FlipCard key={navBaritem.id} {...navBaritem} />;
            })}
          </div>
        </div>
      </div>
      <div className="z-30 p-2 rounded-sm shadow-lg mt-7">
        <img src={ToolsImage} alt="Tools and Accelerators Image" />
      </div>
    </>
  );
};
export default Accelerators;
