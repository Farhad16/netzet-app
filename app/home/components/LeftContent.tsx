import { ChevronRight } from "lucide-react";

export const LeftContent: React.FC = () => {
  const listItems = [
    "✨Start growing your influence right away—no waiting required!",
    "✨Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "✨Use a Personal AI Worker to boost your content ",
    "✨Learn from expert-led courses designed for aspiring influencers",
  ];

  return (
    <div className="flex flex-col md:ml-[215px] sm:mt-[57px] sm:gap-4 p-5 sm:p-0 pt-0 z-10 relative sm:w-[516px]">
      <p className="text-center sm:text-left font-extrabold sm:font-bold text-[25px] sm:text-[35px] leading-[100%] sm:leading-[35px] tracking-normal">
        Want to Turn Social Media Into a Profitable Career?
      </p>
      <p className="text-center sm:text-left font-extrabold sm:font-bold text-[25px] sm:text-[35px] leading-[100%] sm:leading-[35px] tracking-normal text-[#00E7F9] drop-shadow-[0_4px_4px_#FC004E]">
        Discover your way to success with Fametonic:
      </p>
      <ul className="flex flex-col gap-[13px] w-full mt-[22px] sm:mt-0">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="font-medium sm:font-semibold text-[16px] leading-[22px]"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col-reverse sm:flex-col sm:items-start items-center">
        <div className="text-center">
          <button className="mt-[14px] flex items-center justify-center w-[313px] rounded-[10px] py-2 px-10 gap-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9] text-white font-semibold">
            GET STARTED <ChevronRight className="w-4 h-4" />
          </button>
          <p className="mt-2.5 font-normal text-[12px] leading-[16px] text-center">
            1-minute quiz for personalized Insights
          </p>
        </div>

        <div className="flex flex-col sm:mt-[30px] mt-[22px] sm:mb-0 mb-[32px] text-center sm:text-left gap-3">
          <p className="font-normal text-[12px] leading-[16px] font-figtree">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className="font-normal text-[10px] leading-[16px] font-figtree">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
