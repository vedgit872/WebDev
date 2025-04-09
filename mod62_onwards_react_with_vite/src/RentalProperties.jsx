import Property from "./Property"
export default function RentalProperties({ properties }) {
    return (
      <div style={{ display: "flex" }}>
        {properties.map((p) => (
          <Property key={p.id} {...p} />
        ))}
      </div>
    );
  }