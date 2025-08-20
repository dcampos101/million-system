import { useState } from 'react';

export default function Filters({ onFilter }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const submitFilters = (e) => {
    e.preventDefault();
    onFilter({ name, address, minPrice, maxPrice });
  };

  return (
    <form className="row g-3 mb-3" onSubmit={submitFilters}>
      <div className="col-md-3">
        <input className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="col-md-3">
        <input className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="col-md-2">
        <input type="number" className="form-control" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </div>
      <div className="col-md-2">
        <input type="number" className="form-control" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <div className="col-md-2">
        <button className="btn btn-primary w-100" type="submit">Search</button>
      </div>
    </form>
  );
}