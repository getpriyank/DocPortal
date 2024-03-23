import HomePageCard from "./HomePageCard";
import { HomePageCardData, navBarItems } from "../constants";

const Design = () => {
  return (
    // <div className="flex">
    //   <div className="w-1/2 flex flex-col items-center justify-center h-screen">
    //     <h1 className="font-bold text-7xl">GenEx</h1>
    //     <h2 className="font-semibold text-lg">Transforming user experience</h2>
    //   </div>
    //   <div className="flex flex-wrap w-1/2 mt-20 ">
    //     {navBarItems.map((item) => {
    //       return <HomePageCard key={item.id} heading={item?.content} />;
    //     })}
    //   </div>
    // </div>

    <div className="flex">
      <div className="w-1/2 flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-7xl">GenEx</h1>
        <h2 className="font-semibold text-base p-8 text-center">
          Drive{" "}
          <span className="text-p-orange text-lg">
            client delight and predictable quality{" "}
          </span>
          outcomes as
          <span className="text-p-orange text-lg">
            {" "}
            strategic advisors and partners{" "}
          </span>
          through continuous
          <span className="text-p-orange text-lg">
            {" "}
            engineering improvements
          </span>
        </h2>
      </div>
      <div className="w-1/2 flex flex-wrap justify-center self-center items-center mt-20 gap-6">
        {/* {Array(6)
          .fill("")
          .map((item) => (
            <HomePageCard key={1} heading={"ssssssssssss"} />
          ))} */}

        {HomePageCardData.map((item) => {
          return <HomePageCard key={item.id} heading={item?.name} />;
        })}
      </div>
    </div>
  );
};

export default Design;
