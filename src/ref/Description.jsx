import { dummyArticleData } from "../constants";
import { useParams } from "react-router-dom";
const Description = () => {
  const params = useParams();
  console.log(params);

  const resultData = dummyArticleData.find((item) => item.id === params.id);
  console.log(resultData);
  return (
    <div className="flex space-between ml-16 rounded-md shadow-md mr-8 mt-6">
      {resultData?.bullets && (
        <>
          <div className="w-1/2 p-9">
            <h2 className="font-bold text-xl mb-3">What it does?</h2>
            <ul>
              {resultData.bullets.map((bullet, index) => {
                return (
                  <li key={index} className="list-disc">
                    {bullet}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="object-cover w-1/2 p-24">
            <img
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="description-image"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Description;
