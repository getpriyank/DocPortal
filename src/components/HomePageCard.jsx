const HomePageCard = ({ heading }) => {
  return (
    <div className="flex items-center justify-center border border-b-2 border-b-orange-400 shadow-md p-2 h-28  rounded-md w-36 hover:bg-orange-50 ">
      <h1 className="text-xs font-bold text-center">{heading}</h1>
    </div>
  );
};

export default HomePageCard;
