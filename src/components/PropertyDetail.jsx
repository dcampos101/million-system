export default function PropertyDetail({ property, onBack }) {
  if (!property) return null;

  return (
    <div>
      <button className="btn btn-secondary mb-3" onClick={onBack}>Back</button>
      <h2>{property.name}</h2>
      <img src={property.image || "https://via.placeholder.com/500"} className="img-fluid mb-3" alt={property.name} />
      <p><strong>Address:</strong> {property.addressP}</p>
      <p><strong>Owner:</strong> {property.ownerName}</p>
      <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
    </div>
  );
}