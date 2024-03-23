import { useParams } from "react-router-dom";
import TechWise from "./TechWise";
import CodeAssistDashboard, {
  CodeWhispererAdoption,
  UsecaseWiseAdoption,
} from "./Dashboard";
import Accelerators from "../ref/Accelerators";
import UseCases from "./UseCases";
import GenAIToolsAndSolutions from "./GenAIToolsAndSolutions";

const SecondLevelNavigate = () => {
  const params = useParams();
  console.log("second level params", params);
  switch (params.secondLevelItem) {
    case "usecases":
      return <UseCases />;
    case "tools-and-solutions":
      return <GenAIToolsAndSolutions />;
    case "genai-codeassist-adoption-dashboard":
      return <CodeAssistDashboard />;
    // case "genai-in-testing":
    // return <GenAITesting />;
    case "accelerators":
      return <Accelerators />;
    // case "genai-productivity-improvement":
    //   return <ProductivityImprovement />;
    case "productivity-tracker":
      return <CodeAssistDashboard />;
    case "code-whisperer-adoption":
      return <CodeWhispererAdoption />;
    case "usecase-wise-adoption":
      return <UsecaseWiseAdoption />;
    default:
      return <TechWise />;
  }
};

export default SecondLevelNavigate;
