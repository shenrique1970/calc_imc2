import Calcimc from "./calcimc/Calcimc";
import Dadosimc from "./dadosimc/Dadosimc";

export default function Home() {
  return (
    // toda área da janela
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col">
        <p className="text-2xl m-1 font-bold">Calculadora de massa corporal</p>
        <Calcimc />
      </div>
    </div>
  );
}
