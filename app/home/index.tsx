import Image from "next/image";
import { LeftContent } from "./components/LeftContent";
import { RightContent } from "./components/RightContent";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start w-full justify-center relative overflow-hidden">
      <LeftContent />
      <RightContent />
    </div>
  );
}
