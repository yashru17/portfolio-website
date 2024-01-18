import React from "react";

export default function Skillcard(props){

    return (
        <div id="card" className={"w-44 rounded-lg text-center flex flex-col justify-center items-center gap-4 p-4 shadow-lg shadow-white " + props.style}>
            <img src={props.url} alt={props.name} className="w-20 "/>
            <p className="text-xl text-slate-300">{props.name}</p>
        </div>
    )
}