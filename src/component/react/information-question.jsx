import { useState } from "react";
import ArrowRigthIcon from "../icons/arrow-rigth-icon.jsx";
import ArrowDownIcon from "../icons/arrow-down-icon.jsx";

export default function InformationQuestion({ title, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      <button
        className="flex items-center border-4 border-primary-400 rounded-md p-2 gap-4 hover:rounded-md hover:text-white hover:bg-primary-400 hover:stroke-white stroke-primary-500"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h5 className=" text-left">{title}</h5>
        <div className="ml-auto">{!isVisible ? <ArrowRigthIcon /> : <ArrowDownIcon />}</div>
      </button>
      {isVisible ? <p className="p-2">{children}</p> : null}
    </div>
  );
}
