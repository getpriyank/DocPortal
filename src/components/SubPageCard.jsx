import { ArrowRightOutlined } from "@ant-design/icons";
import pipelineIcon from "../assets/pipeline.png";

const SubPageCard = () => {
  return (
    <div className="felx flex-col w-[350px] h-[310px] border border-black rounded-xl pt-7 p-6 mt-24 ml-6 mb-4">
      <img src={pipelineIcon} className="w-11 h-11 mb-12" />
      <div>
        <h1 className="font-bold text-xl mb-2">Content</h1>
        <h2 className="mb-2 font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sit
          tenetur, non totam ratione dolor maiores adipisci fugiat dignissimos
        </h2>
      </div>
      <div className="flex justify-end">
        <ArrowRightOutlined
          style={{
            color: "#FD5F07",
            fontSize: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default SubPageCard;
