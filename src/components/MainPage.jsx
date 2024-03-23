import HorizontalCard from "./HorizontalCard";
import { navBarItems } from "../constants";
import { useParams } from "react-router-dom";

const MainPage = () => {
  const params = useParams();

  const genAiSubmenu = navBarItems.find(
    (item) => item.name.toLowerCase() === "genai"
  )?.subMenu;

  const subsub = genAiSubmenu?.find((item) => {
    return item.name.toLowerCase() === params.subLevelItem.replaceAll("-", " ");
  })?.subMenu;

  return (
    <div className="mt-5">
      {subsub?.map((item) => {
        return (
          <HorizontalCard
            key={item?.id}
            name={item?.name}
            link={item?.link}
            image={item?.horizontalImage}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
