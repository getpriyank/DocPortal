import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const HorizontalCard = ({ name, link, image }) => {
  // subMenu.find((item)=>item.)
  return (
    <div className="flex flex-row border shadow-lg p-6 border-b-2 border-b-orange-500 mx-20 mb-6 rounded-md">
      <div className="w-3/4">
        <div className="flex gap-2 items-center mb-3">
          <h1 className="font-bold text-xl">{name}</h1>
          <span className="pt-1">
            <a href={""} target="_blank" rel="noreferrer">
              <Link to={link}>
                <ArrowRightOutlined
                  style={{
                    color: "#FD5F07",
                    fontSize: "20px",
                  }}
                />
              </Link>
            </a>
          </span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          ipsum accusamus sapiente placeat amet. Quidem, atque quas! In nulla
          quia modi esse voluptatum debitis magnam voluptates, velit libero odio
          cupiditate.
        </p>
      </div>
      <div className="w-1/4  flex flex-col items-center justify-center">
        <img src={image} alt="image-on-home-page" width={100} height={70} />
      </div>
    </div>
  );
};

export default HorizontalCard;
