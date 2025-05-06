import Image from "next/image";

export const RightContent: React.FC = () => {
  return (
    <Image
      src="/mobile.svg"
      alt="logo"
      priority
      width={100}
      height={100}
      className="w-[300px] sm:w-[390px] md:w-[500px] lg:w-[666px] md:h-[679px] sm:mr-[101px] z-5 relative  mx-auto"
    />
  );
};
