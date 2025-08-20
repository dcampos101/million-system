export default function PropertyList({ properties, onSelect }) {
  if (!properties.length) return <p>No properties found.</p>;

  return (
    <div className="row">
      {properties.map((prop) => (
        <div className="col-md-4 mb-3" key={prop.idProperty}>
          <div className="card h-100">
            <img src={prop.image || "https://www.alphainmobiliaria.com.sv/mira/assets/img/slide_005_new.jpg"} className="card-img-top" alt={prop.name} />
            <div className="card-body">
              <h5 className="card-title">{prop.name}</h5>
              <p className="card-text">{prop.addressP}</p>
              <p className="card-text"><strong>${prop.price.toLocaleString()}</strong></p>
              <p className="card-text">{prop.owner}</p>
              <button className="btn btn-outline-primary" onClick={() => onSelect(prop)}>
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}