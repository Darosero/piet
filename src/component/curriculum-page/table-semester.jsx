import { useEffect, useState } from "react";
import { PENSUM } from "../lib/pensum";
import Layout2 from "../layouts/layout2.astro";

function Table() {
  const [hash, setHash] = useState(window.location.hash);
  const pensum = PENSUM[hash] ?? PENSUM["#I"];

  useEffect(() => {
    const hashchange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", hashchange);
  }, []);

  return (
    <div style={{ height: "350px" }} className=" border-4 rounded-lg border-primary-300 ">
      <nav className=" flex bg-primary-100   text-primary-500 md:font-bold font-semibold rounded-t">
      <a href="#I" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">I</a>
      <a href="#II"className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2 ">II</a>
      <a href="#III" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">III</a>
      <a href="#IV" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">IV</a>
      <a href="#V" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">V</a>
      <a href="#VI" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">VI</a>
      <a href="#VII" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">VII</a>
      <a href="#VII" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">VIII</a>
      <a href="#IX" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">IX</a>
      <a href="#X" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">X</a>
      </nav>
      <section className="grid grid-rows-[auto,auto,auto]lg:p-4 p-2 gap-2">
        <h1 className="text-2xl text-primary-500">{pensum?.name}</h1>
        <div className="grid grid-cols-2">
          <h3 className="text-lg">{"Materias: "+ pensum.subject}</h3>
          <h3 className="text-lg">{"Créditos: "+ pensum.credit}</h3>
        </div>
        <section className="grid lg:grid-cols-[1fr,1fr,1fr] grid-cols-[auto,auto]">
          <div className="flex flex-col">
            <h4 className="border-b-4 border-secondary-500 ">Materias</h4>
            {pensum?.subjects.map((subject, index) => (
              <p key={index}>{subject.name}</p>
            ))}
          </div>
          <div className="flex flex-col">
          <h4 className="border-b-4 border-secondary-500 ">Créditos</h4>
            {pensum?.credits.map((credits, index) => (
              <p key={index}>{credits.name}</p>
            ))}
          </div>
          <div className="hidden lg:block ">
          <h4 className="border-b-4 border-secondary-500 ">Prerequisitos</h4>
          {pensum?.prerequisites.map((prerequisites, index) => (
              <p key={index}>{prerequisites.name}</p>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Table;
