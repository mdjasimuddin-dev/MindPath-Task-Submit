import bgImg from "../assets/bg-img.png";
import Carousel from "./carousel";
const Bannar = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="bg-[#d8f6e8] grid col-span-2">
        <div className="flex">
          <div className="flex flex-col flex-1 p-5 lg:p-10 justify-center space-y-3">
            <h1 className="text-[#004B50] lg:text-xl font-publicSans">
              Welcome back 👋 Jaydon Frankie
            </h1>
            <p className="text-xs">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </p>

            <div>
              <button className="bg-[#00A76F] text-white text-xs md:text-base p-2 rounded-md">
                Go Now
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-5 md:p-10">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <Carousel />
      </div>
    </div>
  );
};

export default Bannar;
