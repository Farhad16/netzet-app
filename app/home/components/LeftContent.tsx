import { ChevronRight } from "lucide-react";

export const LeftContent: React.FC = () => {
  const listItems = [
    "✨Start growing your influence right away—no waiting required!",
    "✨Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "✨Use a Personal AI Worker to boost your content ",
    "✨Learn from expert-led courses designed for aspiring influencers",
  ];
  return (
    <div className="flex flex-col md:ml-[215px] sm:mt-[57px] sm:gap-4 p-5 sm:p-0 pt-0">
      <p className="text-center sm:text-left font-extrabold sm:font-bold text-[25px] sm:text-[35px] leading-[100%] sm:leading-[35px] tracking-normal align-middle">
        Want to Turn Social Media Into a Profitable Career?
      </p>
      <p className="text-center sm:text-left font-extrabold sm:font-bold text-[25px] sm:text-[35px] leading-[100%] sm:leading-[35px] tracking-normal align-middle text-[#00E7F9] text-shadow-[0_35px_35px_rgb(0_0_0_/_0.25)]">
        Discover your way to success with Fametonic:
      </p>
      <ul className="flex flex-col gap-[13px] w-full mt-[22px] sm:mt-0">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="font-medium sm:font-semibold text-[16px] leading-[22px] align-middle"
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        <div>
          <button className="mt-[14px] flex items-center justify-center w-[313px] h-auto rounded-[10px] py-2 px-10 gap-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9]">
            GET STARTED <ChevronRight className="w-4 h-4" />
          </button>
          <p className="mt-2.5 font-normal text-[12px] leading-[16px] tracking-[0] text-center align-middle sm:text-[12px] sm:leading-[16px]">
            1-minute quiz for personalized Insights
          </p>
        </div>
      </div>
    </div>
  );
};
