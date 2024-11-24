import React, { useEffect, useState } from 'react';
import { fetchAdoptableCats } from '../api';

function Adoptions() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener gatos adoptables al cargar el componente
    const loadCats = async () => {
      try {
        const data = await fetchAdoptableCats();
        setCats(data);
      } catch (err) {
        setError('No se pudieron cargar los gatos adoptables.');
      } finally {
        setLoading(false);
      }
    };

    loadCats();
  }, []);

  if (loading) {
    return <p>Cargando gatos adoptables...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Gatos en Adopción</h1>
      <div className="cats-grid">
        {cats.map((cat) => (
          <div className="cat-card" key={cat.id}>
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
            <p><strong>Género:</strong> {cat.gender}</p>
            <p><strong>Observaciones:</strong> {cat.observations}</p>
            <button onClick={() => alert(`Formulario de preadopción para ${cat.name}`)}>Adoptar</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Adoptions;
