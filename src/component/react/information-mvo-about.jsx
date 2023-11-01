import { useState } from "react";
import AddIcon from "../icons/add-icon.jsx";
import clsx from "clsx";

export default function InformationMVO({ title, children, bgColor }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <button className={clsx("relative", bgColor)} onClick={() => setIsVisible(!isVisible)}>
      <div className="container group flex flex-col items-center justify-center p-4 ">
        <div className="opacity-100 group-hover:opacity-0 font-bold text-3xl absolute stroke-white flex flex-col items-center">
          <h3 className="text-white"> {title} </h3>
          <AddIcon />
        </div>
        <div className="opacity-0 group-hover:opacity-100 ">
          <h3 className="font-bold text-xl text-white">{title}</h3>
          <p className="p-2 text-white font-normal text-base hover:opacity-100">{children}</p>
        </div>
      </div>
    </button>
  );
}
