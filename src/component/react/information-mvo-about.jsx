import { useState } from "react";
import clsx from "clsx";
import AddIcon from "../icons/add-icon";

export default function InformationMVO({ title, children, bgColor }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <button className={clsx("relative", bgColor)} onClick={() => setIsVisible(!isVisible)}>
      <div className="container group flex flex-col items-center justify-center p-4" >
        <div className="opacity-100 group-hover:opacity-0 font-bold lg:text-2xl absolute stroke-white flex flex-col items-center">
          <h3 className="text-white"> {title} </h3>
          <div className="md:hidden visible">
          <AddIcon></AddIcon>
          </div>
          
        </div>
        <div className="opacity-0 group-hover:opacity-100 p-4">
          <h3 className="font-bold lg:text-xl text-white">{title}</h3>
          <p className=" text-white font-normal text-base hover:opacity-100">{children}</p>
        </div>
      </div>
    </button>
  );
}
