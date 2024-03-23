import pipelineIcon from "../assets/pipeline.png";
require("../assets/pipeline.png");
import { Link } from "react-router-dom";
const FlipCardStyles =
  "border border-b-4 border-b-orange-600 rounded-none shadow-md bg-white pb-4  flex  justify-center items-center w-[260px] h-[180px] rounded-lg";
const FlipCard = ({ id, name, link, content }) => {
  console.log("id, name, link", id, name, link);
  const filePath = "../assets/pipeline.png";
  const fileUrl = require(filePath);

  return (
    <div className="group h-[180px] w-[260px] [perspective:1000px]">
      <div className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <div
            className={FlipCardStyles}
            // title=""
            // bordered={true}
          >
            <div className="flex  items-center justify-center p-3 min-w-full min-h-full">
              <p className="text-lg font-bold text-center">{name}</p>
              {/* <img src={fileUrl} alt="pipeline" width={60} height={60} /> */}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className={`${FlipCardStyles} p-2`}>
            <p className="font-medium text-sm hover:text-p-orange mb-5">
              {content}
            </p>
            <Link to={`${link}`}>
              <button className="bg-orange-600 text-white text-sm font-bold py-1 px-2 rounded-full">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
