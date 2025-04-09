export default function Property({name,rating,price}){
    return (
        <div style={{margin:"20px"}}>
            <h3>{name}</h3>
            <p>Rating:{rating}</p>
            <h5>Price:$ {price}</h5>
        </div>
    );
}