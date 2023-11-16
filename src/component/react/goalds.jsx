import { useState } from "react";
import AddIcon from "../icons/add-icon.jsx";

export default function Goalds({ title, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col w-full gap-8">
      <button
        className="grid grid-rows-card justify-center  border-4 border-primary-500 rounded-lg bg-primary-500 p-4"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h2 className="font-bold lg:text-2xl text-white">{title}</h2>
        <div className="flex justify-center stroke-white">
          <AddIcon />
        </div>
      </button>
      {isVisible ? <p className="p-4 lg:mx-40 border-4 rounded-lg border-primary-500/20">{children}</p> : null}
    </div>
  );
}
