const StaticText = ({ text, heading }) => {
  return (
    <div className="text-black z-30">
      <h1 className="text-center text-7xl font-bold mb-7">GenEx</h1>
      <h2 className="text-center text-xl font-semibold">{text}</h2>
    </div>
  );
};

export default StaticText;
