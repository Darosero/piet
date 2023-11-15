import { useEffect } from "react";

export default function TableSemester() {
  const title = "";
  const subjets = "";
  const credits = ""
  console.log(route);

  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash);
  }, [window.location.hash]);

  return (
    <section>
      <div class="py-4 justify-center">
        <a href="/semestre#I">I</a>
        <a href="/semestre#II">II</a>
        <a href="/semestre#III">III</a>
        <a href="/semestre#IV">IV</a>
        <a href="/semestre#V">V</a>
        <a href="/semestre#VI">VI</a>
        <a href="/semestre#VII">VII</a>
        <a href="/semestre#VIII">VIII</a>
        <a href="/semestre#IX">IX</a>
        <a href="/semestre#X">X</a>
      </div>
      <div class="p-4 border-4 rounded-md border-primary-500">
        <div>
          <h3 class="text-2xl font-semibold">{"Semestre " + title}</h3>
        </div>
        <div class="grid grid-flow-col-dense font-medium py-4">
          <h4>Materias: {subjets}</h4>
          <h4>Creditos: {credits}</h4>
        </div>
        <div class="grid grid-flow-col-dense border-4 border-secondary-600/80 p-4 font-semibold">
          <div class="grid grid-rows">
            <h6>MATERIA</h6>
          </div>
          <div class="grid grid-rows">
            <h6>CREDITOS</h6>
          </div>
          <div class="hidden md:block">
            <h6>PRE-REQUISITOS</h6>
          </div>
          <div class="hidden md:block">
            <h6>MICROCURRICULUM</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
