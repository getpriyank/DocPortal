import BenefitsCard from "./BenefitsCard";
import { useCases } from "../constants";

const UseCases = () => {
  return (
    <div className="flex flex-wrap gap-8 mt-5 m-20 ">
      {useCases.map((item) => {
        return <BenefitsCard key={item.id} benefit={item?.name} />;
      })}
    </div>
  );
};

export default UseCases;
