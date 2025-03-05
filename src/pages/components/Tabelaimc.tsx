interface TabelaimcProps {
    imc:number
}

export default function Tabelaimc(props:TabelaimcProps) {
    return(
        <div className="mx-2 mb-2">
            <div className="flex">
                <div className="w-1/2 border text-center font-bold">Classificação</div>
                <div className="w-1/2 border text-center font-bold">IMC</div>
            </div>
            <div className={"flex rounded-lg " + (props.imc < 18.5 && props.imc <= 0 ? "destaque" : "")}>
                <div className="w-1/2 border text-center font-bold">Abaixo do peso</div>
                <div className="w-1/2 border text-center font-bold">Abaixo de 18,5</div>
            </div>
            <div className={"flex rounded-lg " + (props.imc >= 18.5 && props.imc <= 24.9 ? "destaque" : "")}>
                <div className="w-1/2 border text-center font-bold">Peso normal</div>
                <div className="w-1/2 border text-center font-bold">Entre 18,5 e 24,9</div>
            </div>
            <div className={"flex rounded-lg " + (props.imc >= 25 && props.imc <= 29.9 ? "destaque" : "")}>
                <div className="w-1/2 border text-center font-bold">Sobre peso</div>
                <div className="w-1/2 border text-center font-bold">Entre 25 e 29,9</div>
            </div>
            <div className={"flex rounded-lg " + (props.imc >= 30 && props.imc <= 34.9 ? "destaque" : "")}>
                <div className="w-1/2 border text-center font-bold">Obesidade grau I</div>
                <div className="w-1/2 border text-center font-bold">Entre 30 e 34,9</div>
            </div>
            <div className={"flex rounded-lg " + (props.imc >= 35 && props.imc <= 39.9 ? "destaque" : "")}>
                <div className="w-1/2 border text-center font-bold">Obesidade grau II</div>
                <div className="w-1/2 border text-center font-bold">Entre 35 e 39,9</div>
            </div>
            <div className={"flex rounded-lg " + (props.imc > 40 ? "destaque" : "")}>
                <div className="w-1/2 border text-center font-bold">Obesidade grau III</div>
                <div className="w-1/2 border text-center font-bold">Maior que 40</div>
            </div>
        </div>
    )
}