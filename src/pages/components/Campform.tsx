interface CampformProps{
    label:string,
    state:any,
    funcState:any
}

export default function Compform(props:CampformProps) {
    return(
        <div className="flex mx-2">
            <label className="w-[60px] m-1">{props.label}</label>
            <input className="border p-1 w-full rounded-lg" value={props.state} onChange={(evt)=>props.funcState(evt.target.value)}/>
        </div>
    )
}

