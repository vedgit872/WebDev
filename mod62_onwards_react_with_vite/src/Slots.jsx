export default function Slots({ val1, val2, val3 }) {
    if (val1 === val2 && val2 === val3) {
      return (
        <>
          <div>{val1} {val2} {val3}</div>
          <div style={{ color: "green" }}>You Win</div>
          <div>Congrats!!!!</div>
        </>
      );
    } else {
      return null;
    }
  }