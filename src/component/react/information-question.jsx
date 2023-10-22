import { Children, useState } from "react";
import MoreIcon from "../icons/more-icon.jsx";
import MinusIcon from "../icons/minus-icon.jsx";
import ArrowRigthIcon from "../icons/arrow-rigth-icon.jsx";
import ArrowDownIcon from "../icons/arrow-down-icon.jsx";

export default function InformationQuestion({ title, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="py-4 w-[1100px]">
      <div className="hover:rounded-md hover:text-white hover:bg-primary-400 hover:stroke-white stroke-primary-500">
        <button
          className=" flex  border-4 border-primary-400 rounded-md w-full p-2 gap-4"
          onClick={() => setIsVisible(!isVisible)}
        >
          {!isVisible ? <MoreIcon /> : <MinusIcon />}
          <h2 className="flex-1 text-left font-semibold text-lg ">{title}</h2>
          {!isVisible ? <ArrowRigthIcon /> : <ArrowDownIcon />}
        </button>
      </div>

      {isVisible ? <p className="py-4 px-10 ">{children}</p> : null}
    </div>
  );
}
