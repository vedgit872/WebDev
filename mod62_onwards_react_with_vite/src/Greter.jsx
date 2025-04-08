export default function Greter({person ,age=18}){
    let val="appropriate age";
    if(age<18){
        val="under Age"
    }
    return (<>
    <h1>Hi There {person} </h1>
    <h2>{age} is {val}</h2>
    </>);
} 