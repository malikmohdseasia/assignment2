import {
  DotIcon,
  FilterIcon,
  NotificationIcon,
  PlayBtn,
  SearchIcon,
  StarIcon,
  StarIcon2,
  StarIcon4,
  StarIcon5,
  StartIcon3,
} from "../assets/Icons";
import CardComponent from "./CardComponent";
import Mentor from "./Mentor";
import RightSidebar from "./RightSidebar";
import Siderbar from "./Siderbar";

const Hero = () => {
  const items = [
    {
      title: "Product Design",
      svg1: NotificationIcon,
      svg2: DotIcon,
      description: "2/8 Watched",
    },
    {
      title: "Product Design",
      svg1: NotificationIcon,
      svg2: DotIcon,
      description: "2/8 Watched",
    },
    {
      title: "Product Design",
      svg1: NotificationIcon,
      svg2: DotIcon,
      description: "2/8 Watched",
    },
  ];

  return (
    <div className="flex">
      <Siderbar />

      {/* RIGHT PAGE  */}
      <div className=" p-5 w-210">
        <div className="flex items-center gap-3 ">
          <div className="border border-[#CCCCCCCC] rounded-xl py-5 px-4 flex items-center gap-2.5 w-full">
            {SearchIcon}
            <input
              type="text"
              name=""
              id=""
              placeholder="Search your course here...."
              className="w-full text-[12px] text-[#9E9E9E]"
            />
          </div>
          <p className="p-3 font-inter"> {FilterIcon}</p>
        </div>

        <div className=" my-6 bg-starComponent rounded-[20px] relative">
          <div className="py-5 ml-6 flex flex-col gap-4">
            <p className="text-bgNav font-inter text-[12px] font-normal">
              ONLINE COURSE{" "}
            </p>
            <p className="text-bgNav font-semibold text-[24px] font-inter">
              Sharpen Your Skills With <br /> Professional Online Courses
            </p>
            <div className="bg-navItems py-2 px-3 flex gap-3 items-center rounded-[40px] w-27.5 h-9">
              <p className="font-inter text-[12px] font-medium text-bgNav">
                Join Now
              </p>
              {PlayBtn}
            </div>
          </div>
          <div className="absolute top-11.25 right-19.5">{StarIcon}</div>
          <div className="absolute top-5 right-39.25">{StarIcon2}</div>
          <div className="absolute bottom-2 right-1.75 ">{StartIcon3}</div>
          <div className="absolute bottom-1 right-37 ">{StarIcon4}</div>
          <div className="absolute top-1 right-6.5 ">{StarIcon5}</div>
        </div>

        <div className=" flex flex-wrap justify-between gap-3.25 my-6">
          {items.map((item, index) => (
            <div
              className="p-3 flex gap-4.25 items-center justify-center rounded-xl flex-1
                shadow-[0px_14px_42px_0px_rgba(8,15,52,0.06)]
                "
              key={index}
            >
              {item.svg1}
              <div>
                <p className="font-inter text-[12px] font-normal text-[#5F5F5F]">
                  {item.description}
                </p>
                <p className="font-inter text-navItems font-semibold text-[12px]">
                  {item.title}
                </p>
              </div>
              {item.svg2}
            </div>
          ))}
        </div>

        <CardComponent />
        <Mentor />
      </div>
        <RightSidebar/>
    </div>
  );
};

export default Hero;
