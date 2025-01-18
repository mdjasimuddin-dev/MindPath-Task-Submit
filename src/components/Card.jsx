const Card = ({ icon, img, text, parsent, user }) => {
  return (
    <div className=" flex shadow-lg rounded-2xl justify-between p-3 lg:p-6">
      <div className="space-y-3">
        <p className="text-[#212B36] text-xs lg:text-base">{text}</p>
        <div className="flex items-center gap-x-5">
          <img src={icon} alt="" />
          <p className="text-xs lg:text-base">{parsent}</p>
        </div>

        <h1 className="text-base lg:text-3xl font-bold">{user}</h1>
      </div>

      <div className="flex justify-center items-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Card;
