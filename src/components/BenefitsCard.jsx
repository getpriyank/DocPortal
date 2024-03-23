import { Card } from "antd";
const BenefitsCard = ({ benefit }) => {
  return (
    <Card
      bordered={true}
      style={{
        width: 250,
        height: 100,
      }}
      className="border-b-orange-400 border-b-4 rounded-lg shadow-lg mb-4 h-full flex items-center hover:bg-orange-50"
    >
      <p className="font-bold">{benefit}</p>
    </Card>
  );
};

export default BenefitsCard;
