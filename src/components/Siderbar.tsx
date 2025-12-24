import {
  Group,
  Home,
  Inbox,
  Lesson,
  Logo,
  Logout,
  Setting,
  Task,
} from "../assets/Icons";
import NAVIMAGE from "../assets/Navbar/navimage.jpg";

const Siderbar = () => {
  const items = [
    { title: "Dashboard", svg: Home },
    { title: "Inbox", svg: Inbox },
    { title: "Lesson", svg: Lesson },
    { title: "Task", svg: Task },
    { title: "Group", svg: Group },
  ];

  const profileItems = [
    { title: "Prashant", img: NAVIMAGE, description: "software Developer" },
    { title: "Prashant", img: NAVIMAGE, description: "software Developer" },
    { title: "Prashant", img: NAVIMAGE, description: "software Developer" },
  ];

  const NavBottomItems = [
    { title: "Settings", svg: Setting },
    { title: "Logout", svg: Logout },
  ];

  return (
    <div
      className="bg-bgNav  p-8 w-60 flex flex-col justify-between gap-44.5
    shadow-[0px_14px_42px_0px_rgba(8,15,52,0.06)]"
    >
      <div className="flex flex-col gap-12 ">
        <div>{Logo}</div>

        <div className="">
          <p className="p-2 text-navheading font-semibold font-inter">
            OVERVIEW
          </p>
          {items.map((item, index) => (
            <div key={index} className="flex gap-3 items-center p-2">
              {item.svg}
              <p className="font-inter text-navItems font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="p-2 font-inter text-navheading font-semibold">
            FRIENDS
          </p>
          {profileItems.map((item, index) => (
            <div className="flex gap-[3.5px] items-center mb-5" key={index}>
              <img
                className="w-6 h-6 rounded-full object-cover"
                src={item.img}
                alt="profile"
              />
              <div>
                <p className="font-inter text-navItems font-medium text-sm">
                  {item.title}
                </p>
                <p className="font-inter text-navItems text-[8px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <p className="font-inter text-navheading font-semibold">SETTINGS</p>
        {NavBottomItems.map((item, index) => (
          <div className="flex gap-4 items-center" key={index}>
            {item.svg}
            <p
              className={`font-inter font-medium  ${
                item.title === "Logout" ? "text-[#F13E3E]" : "text-navItems"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Siderbar;
