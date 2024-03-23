import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Typography } from "antd";
const { Paragraph } = Typography;

const ToolsCard = ({ tool }) => {
  const content = tool?.content;
  const rows = 3;
  const normal = tool?.buttons?.[0]?.normal;
  console.log("normal", normal);
  const items = tool?.buttons?.[1]?.More?.map((button) => {
    return {
      key: String(button.id + 1),
      label: (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            {button.name}
          </a>
        </>
      ),
    };
  });

  return (
    <div className="relative border border-r-2 w-72 h-[350px] shadow-md rounded-md mx-1">
      <div className="flex justify-center mb-3 px-4 pt-4 pb-2">
        <img src={tool?.homeImage} alt="tool-image" className="w-36 h-32" />
      </div>
      <div className="px-4">
        <h1 className="text-base font-bold mb-1">{tool?.name}</h1>
        {/* <p className="text-sm mb-2"></p> */}
        <Paragraph
          ellipsis={{
            rows,
            expandable: false,
            onEllipsis: (ellipsis) => {
              console.log("Ellipsis changed:", ellipsis);
            },
          }}
          title={`${content}`}
        >
          {content}
        </Paragraph>
      </div>
      {/* <div className="flex gap-1 mb-1 text-white font-semibold text-sm px-4 ">
        {tool?.tags?.map((tag, id) => {
          return (
            <button
              className="border rounded-full bg-orange-500 px-4 py-1"
              key={id}
            >
              {tag}
            </button>
          );
        })}
      </div> */}
      <div className="flex justify-between absolute bottom-0  border border-t-gray-100 p-2 w-full ">
        {normal?.length > 0 &&
          normal?.map((item, i) => {
            return (
              <a
                href={item?.link}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-[1px] border-orange-500 text-orange-500 text-sm font-bold px-2 py-[5px] rounded-md">
                  {item?.name}
                </button>
              </a>
            );
          })}

        {items?.length > 0 && (
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Button className="border-[1px] border-orange-500 text-orange-500 text-sm font-bold px-2 py-[5px] rounded-md">
                More
                <DownOutlined />
              </Button>
            </a>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default ToolsCard;
