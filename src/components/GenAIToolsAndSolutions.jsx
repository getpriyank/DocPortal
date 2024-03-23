import { toolsData } from "../constants";
import ToolsCard from "./ToolsCard";

const GenAIToolsAndSolutions = () => {
  return (
    <div className="flex flex-wrap justify-around gap-3 pt-5 m-5">
      {toolsData.map((tool) => {
        return <ToolsCard tool={tool} key={tool?.id} />;
      })}
    </div>
  );
};

export default GenAIToolsAndSolutions;
