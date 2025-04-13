import {useState} from "react";

export default function Toogle(){
    const [toogle,setToogle]=useState(true);//Use state returns arrauy [] not object {} so be careful here
    const clickTogle=()=>setToogle(!toogle);
    return (
        <p onClick={clickTogle}>
            {toogle?"😁":"😒"}
        </p>
    );
}