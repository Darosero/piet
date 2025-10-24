import { useEffect, useState } from "react";
import { OLDPENSUM } from "../lib/old-pensum";
import { NEWPENSUM } from "../lib/new-pensum";

function Table({ isNew }) {
  const [hash, setHash] = useState(window.location.hash);
  const [pensum, setPensum] = useState(null);
  // helper: normaliza el nombre para usar como nombre de archivo en /pdfs/<safe>.pdf
   function safeFilename(str) {
    return String(str || "")
      .normalize("NFD")                 // separar diacríticos
      .replace(/[\u0300-\u036f]/g, "")  // quitar acentos
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")      // no alfanum -> underscore
      .replace(/^_+|_+$/g, "")          // trim underscores
      .replace(/_+/g, "_");             // colapsar múltiples underscores
  }
  useEffect(() => {
    isNew ? setPensum(NEWPENSUM[hash] ?? NEWPENSUM["#I"]) : setPensum(OLDPENSUM[hash] ?? OLDPENSUM["#I"]);
  }, [hash]);

  useEffect(() => {
    const hashchange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", hashchange);
  }, []);

  return (
    <div className=" lg:h-[320px] sm:h-96 border-4 rounded-lg border-primary-300">
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
          <h3 className="text-lg px-2 text-primary-900">{"Materias: " + pensum?.subject}</h3>
          <h3 className="text-lg px-2 text-primary-900">{"Créditos: " + pensum?.credit}</h3>
        </div>
        <section className="grid lg:grid-cols-3 grid-cols-[auto,auto] ">
          <section className="grid lg:grid-cols-2 grid-cols-[auto,auto] ">
            <div className="flex flex-col border-4 ">
              <h4 className="border-b-4 md:px-2 text-primary-900">Código</h4>
              {pensum?.code.map((code, index) => (
                <p className="md:px-2 text-sm " key={index}>
                  {code.name}
                </p>
              ))}
            </div>
            <div className="flex flex-col border-x-2  border-y-4">
              <div>
                <h4 className="border-b-4 md:px-2 text-primary-900 ">Créditos</h4>
                {pensum?.credits.map((credits, index) => (
                  <p className="md:px-2 text-sm " key={index}>
                    {credits.name}
                  </p>
                ))}
              </div>
            </div>
          </section>

            <div className="flex flex-col border-x-2  border-y-4">
              <h4 className="border-b-4 md:px-2 text-primary-900">Asignatura</h4>
            {pensum?.subjects.map((subject, index) => {
              const codeFromPensum = pensum?.code?.[index]?.name;
              const safeCode = codeFromPensum
                ? safeFilename(subject.name)
                : safeFilename(codeFromPensum);
              const pdfUrl = `/subject_content/${safeCode}.pdf`;
              return (
                <p className="md:px-2 text-sm " key={index}>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir PDF de ${subject.name}`}
                    className="text-primary-600 hover:underline"
                  >
                    {subject.name}
                  </a>
                </p>
              );
            })}
          
          </div>          <div className="hidden lg:block border-4 ">
            <h4 className="border-b-4 md:px-2 text-primary-900">Prerequisitos</h4>
            {pensum?.prerequisites.map((prerequisites, index) => (
              <p className=" md:px-2 text-sm " key={index}>
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
