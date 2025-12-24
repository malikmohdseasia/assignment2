import { BellIconProfile, DotIcon, ProfileIcon2 } from "../assets/Icons";
import ProfileImg from "../assets/RIghtPage/navimage.jpg";
import HistogramChart from "./HistogramChart";

const RightSidebar = () => {
  return (
    <div className=" shadow-[0px_14px_42px_0px_#080F340F] py-8 px-6 flex-1 flex flex-col ">
      <div className="flex justify-between">
        <p>Your Profie</p>
        {DotIcon}
      </div>
      <div className=" text-center flex flex-col justify-center items-center gap-4">
       <div className="inline-block">
  <img
    src={ProfileImg}
    alt="profile"
    className="w-16 h-16 object-cover rounded-full border-2 border-[#702DFF] border-t-2 border-t-[#CCCCCC4D]"
  />
</div>



        <div>
          <p className="font-inter text-navItems font-medium">
            Good Morning Prashant
          </p>
          <p className="font-inter text-[#7E7E7E] text-[12px]">
            continue your journey and achieve Your Target
          </p>
        </div>
        <div className="flex gap-6 justify-center">
        {BellIconProfile}
        {ProfileIcon2}
        {ProfileIcon2}
      </div>
      </div>


     <HistogramChart/>
      
    </div>
  );
};

export default RightSidebar;
