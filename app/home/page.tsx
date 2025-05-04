import Image from "next/image";
import { LeftContent } from "./components/LeftContent";
import { RightContent } from "./components/RightContent";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start w-full justify-center">
      <LeftContent />
      <RightContent />
    </div>
  );
};
