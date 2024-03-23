import { useParams } from "react-router-dom";
import { toolsData } from "../constants";
import { ArrowRightOutlined } from "@ant-design/icons";
import BenefitsCard from "../components/BenefitsCard";
import testImg from "../assets/test.jpg";

const ArticleStaticText = () => {
  return (
    <div className="mt-20 ml-16 mb-10 mr-80">
      <h1 className="text-6xl font-bold mb-5">GenEx Services</h1>
      <p className="text-2xl font-light">
        Discover how services and solutions can help your enterprise turn
        digital challenges into business success.
      </p>
    </div>
  );
};

const Article = () => {
  const params = useParams();
  console.log(params);

  const resultData = toolsData.find((item) => item.id === params.id);
  console.log(resultData);

  return (
    <div className="py-16">
      <ArticleStaticText />
      <div className="flex flex-row h-[500px]">
        <div className="w-1/2 bg-[#342E39] text-white pl-16 pt-28 pb-14 pr-20">
          <h1 className="text-3xl font-bold mb-6">{resultData?.name}</h1>
          <h2 className="text-base font-light mb-8">
            {resultData?.description}
          </h2>
          <h3 className="mb-3">Links</h3>
          <h3 className="font-bold">
            <span className="mr-2">Try it now!</span>
            <a href={resultData?.websiteLink} target="_blank" rel="noreferrer">
              <ArrowRightOutlined
                style={{
                  color: "#FD5F07",
                  fontSize: "20px",
                }}
              />
            </a>
          </h3>
          <h3 className="font-bold flex items-center">
            <span className="mr-2">Find our source code here</span>
            <a href={resultData?.githubLink} target="_blank" rel="noreferrer">
              <ArrowRightOutlined
                style={{
                  color: "#FD5F07",
                  fontSize: "20px",
                }}
              />
            </a>
          </h3>
        </div>
        <div className="w-1/2 bg-yellow-200">
          <img
            src={testImg}
            alt="image1"
            className="w-full h-full object-cover"
          ></img>
        </div>
      </div>

      <div className="ml-16 rounded-md shadow-md mr-8 mt-6 p-4">
        <h1 className="text-2xl font-bold mt-6 pb-3">Description</h1>
        {resultData?.description && (
          <p className="text-base font-normal pr-3 text-[#342E39]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            aliquam repellat eius, rem, quisquam pariatur numquam alias, quo
            delectus inventore assumenda nesciunt harum ipsum. In obcaecati
            pariatur deleniti ratione delectus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis vel consectetur eligendi atque
            sit, fuga quia possimus iure asperiores accusantium dicta mollitia
            perferendis voluptas quos ex saepe placeat cupiditate corporis?
          </p>
        )}
      </div>

      <div className="flex flex-col ml-16">
        {resultData?.benefits && (
          <>
            <h1 className="text-2xl font-bold mt-6">Benefits</h1>
            <div className="flex justify-around flex-wrap px-8 py-8">
              {resultData.benefits.map((benefit, index) => {
                return <BenefitsCard key={index} benefit={benefit} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Article;
