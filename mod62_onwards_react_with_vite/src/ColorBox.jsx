import {useState} from "react";
import "./ColorBox.css"

export default function ColorBox({namedColors}){
    const n=namedColors.length;
    const [color,setcolor]=useState(Math.floor(Math.random()*n));
    const click=()=>setcolor(Math.floor(Math.random()*n));
    return (
        <div className="Box" style={{backgroundColor:namedColors[color].hex}} onClick={click} >

        </div>
    );
}