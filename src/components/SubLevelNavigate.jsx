import { useParams } from "react-router-dom";
import TechWise from "./TechWise";
import CodeAssistDashboard from "./Dashboard";
import Accelerators from "../ref/Accelerators";
import MainPage from "./MainPage";
import { navBarItems } from "../constants";

const SubLevelNavigate = () => {
  const params = useParams();
  console.log("sss", params);
  const final = navBarItems.find(
    (item) => item.name.toLowerCase() === params.name
  )?.subMenu;
  console.log("Final", final);

  switch (params.subLevelItem) {
    case "tech-wise-standard-estimation":
      return <TechWise />;
    case "genai-codeassist-adoption-dashboard":
      return <CodeAssistDashboard />;
    // case "genai-in-testing":
    //   return <GenAITesting />;
    case "accelerators":
      return <Accelerators />;
    case "genai-productivity-improvement":
      return <CodeAssistDashboard />;

    case "genai-processes":
      return <MainPage />;
    default:
      return <TechWise />;
  }
};

export default SubLevelNavigate;
