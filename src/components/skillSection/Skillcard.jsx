import React from "react";

export default function Skillcard(props){

    return (
        <div id="card" className={"md:w-44 w-28 rounded-lg text-center flex flex-col justify-center items-center gap-4 p-4 shadow-lg hover:scale-105 duration-300 " + props.style}>
            <img src={props.url} alt={props.name} className="w-14 "/>
            <p className="text-lg text-slate-300">{props.name}</p>
        </div>
    )
}