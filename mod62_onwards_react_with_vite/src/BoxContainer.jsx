import ColorBox from "./ColorBox";
import "./BoxContainer.css"

export default function BoxContainer({namedColors}){
    const repeat=()=>{
        const boxes = [];
        for (let index = 0; index < 25; index++) {
        boxes.push(<ColorBox key={index} namedColors={namedColors} />);
        }
        return boxes;
    };
    return (
        <div className="Container">
             {repeat()}
        </div>
    );
}