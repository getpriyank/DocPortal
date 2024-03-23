// Use this card for mobile view in future

import pipelineIcon from "../assets/pipeline.png";
import { Card } from "antd";
import { Link } from "react-router-dom";
const CardView = ({ title, content, link, id }) => {
  console.log("Key", id);
  return (
    <Link to={`/article/${id}`}>
      <div>
        <Card
          className="border border-b-4 border-b-orange-600 rounded-none shadow-md  bg-white pb-4 pr-3 p-2 mr-2 mb-8"
          title=""
          bordered={true}
          style={{
            width: 300,
            height: 200,
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-bold">{title}</p>
            <img src={pipelineIcon} alt="pipeline" width={40} height={40} />
          </div>
          <p>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-sm hover:text-p-orange"
            >
              {content}
            </a>
          </p>
        </Card>
      </div>
    </Link>
  );
};

export default CardView;
