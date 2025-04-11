export default function Button({message,onClick}){
    return (
        <>
        <button onClick={()=>{
            console.log(onClick)
        }}>{message}</button>
        </>
    );
}