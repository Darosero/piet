import { useEffect, useState } from "react";
import { OLDPENSUM } from "../lib/old-pensum";
import { NEWPENSUM } from "../lib/new-pensum";

function Table() {
  const [hash, setHash] = useState(window.location.hash);
  const pensum = OLDPENSUM[hash] ?? OLDPENSUM["#I"];
  const newPensum = NEWPENSUM[hash] ?? NEWPENSUM["#I"];

  useEffect(() => {
    const hashchange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", hashchange);
  }, []);

  return (
    <div  className=" lg:h-[360px] sm:h-96 border-4 rounded-lg border-primary-300">
      <nav className=" flex bg-primary-100   text-primary-500 md:font-bold font-semibold rounded-t">
        <a href="#I" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">
          I
        </a>
        <a href="#II" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2 ">
          II
        </a>
        <a href="#III" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">
          III
        </a>
        <a href="#IV" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">
          IV
        </a>
        <a href="#V" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">
          V
        </a>
        <a href="#VI" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">
          VI
        </a>
        <a href="#VII" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">
          VII
        </a>
        <a href="#VIII" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">
          VIII
        </a>
        <a href="#IX" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2">
          IX
        </a>
        <a href="#X" className="hover:bg-primary-200 lg:px-4 lg:py-2 p-2 ">
          X
        </a>
      </nav>
      <section className="grid grid-rows-[1fr,auto,auto] gap-2 lg:px-4 px-0">
        <h1 className="text-2xl text-primary-500 px-2">{pensum?.name}</h1>
        <div className="grid grid-cols-2">
          <h3 className="text-lg px-2">{"Materias: " + pensum.subject}</h3>
          <h3 className="text-lg px-2">{"Créditos: " + pensum.credit}</h3>
        </div>
        <section className="grid lg:grid-cols-3 grid-cols-2">
          <div className="flex flex-col border-y-4 lg:border-4 sm:border-y-4">
            <h4 className="border-b-4 md:px-2">Asignatura</h4>
            {pensum?.subjects.map((subject, index) => (
              <p className="md:px-2 " key={index}>
                {subject.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col border-y-4 ">
            <div>
              <h4 className="border-b-4 md:px-2">Creditos</h4>
              {pensum?.credits.map((credits, index) => (
                <p className=" md:px-2" key={index}>
                  {credits.name}
                </p>
              ))}
            </div>
          </div>
          <div className="hidden lg:block border-x-4 border-y-4">
            <h4 className="border-b-4 md:px-2">Prerequisitos</h4>
            {pensum?.prerequisites.map((prerequisites, index) => (
              <p className=" md:px-2" key={index}>
                {prerequisites.name}
              </p>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Table;
