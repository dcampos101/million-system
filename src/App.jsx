import { useEffect, useState } from 'react';
import Filters from './components/Filters';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import { getProperties } from './api';
import "./styles.css";
import Header from "./components/Header";
import headerBg from './assets/header2.png';

export default function App() {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({});
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    const data = await getProperties(filters);
    setProperties(data);
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <div className="container my-4"style={{ backgroundImage: `url(${headerBg})` }}>
      <Header />
      <h1 className="mb-4"></h1>

      {!selected && (
        <>
          <Filters onFilter={setFilters} />
          <PropertyList properties={properties} onSelect={setSelected} />
        </>
      )}

      {selected && <PropertyDetail property={selected} onBack={() => setSelected(null)} />}
    </div>
  );
}