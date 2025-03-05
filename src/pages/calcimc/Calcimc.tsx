import { useState } from "react"
import Tabelaimc from "../components/Tabelaimc"
import Campform from "../components/Campform"
import Link from "next/link"

export default function Calcimc() {

    const [peso, setPeso]=useState<number>(0)
    const [altura, setAltura]=useState<number>(0)
    const [imc, setImc]=useState<number>(0)

    //função para calcular IMC
    function calcular() {
        let res=peso/(altura*altura)
        setImc(res)
    }

    return(
        <div className="flex flex-col border border-black w-[350px] gap-5">
            <p className="w-full text-center bg-zinc-400 font-bold text-lg">Cálculo do IMC</p>
            <Campform label="peso" state={peso} funcState={setPeso}/>
            <Campform label="altura" state={altura} funcState={setAltura}/>
            <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={calcular}>Calcular</button>
            <Link className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer text-center" href={{
                pathname: '/dadosimc/Dadosimc',
                query: { p_peso:peso,
                         p_altura:altura,
                         p_imc:imc
                        }
            }}>Dados IMC</Link>
            <p className="bg-zinc-200 p-1 mx-2 text-center rounded-lg">Resultado {imc.toFixed(2)}</p>
            <Tabelaimc imc={imc}/>
        </div>
    )
}