import Image from "next/image";

export const RightContent: React.FC = () => {
  return (
    <Image
      src="/mobile.svg"
      alt="logo"
      priority
      width={100}
      height={100}
      className="sm:w-[666px] w-[390px] sm:h-[679px] mr-[101px]"
    />
  );
};
