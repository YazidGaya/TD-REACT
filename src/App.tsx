import { useState, useEffect } from "react";
import superHeros from "../src/SuperHerosComplet.json"; // Import du fichier JSON simple

function App() {
  // Étape 1 : variable simple
  const nom = "Toto";

  // Étape 2 : compteur avec useState
  const [compteur, setCompteur] = useState(0);

  // Bonus : champ de recherche
  const [search, setSearch] = useState("");

  // Étape 3 : useEffect → mise à jour du titre
  useEffect(() => {
    document.title = `Compteur : ${compteur}`;
  }, [compteur]);

  // Filtrage des super-héros avec le champ de recherche
  const filteredHeros = superHeros.filter(hero =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* Étape 1 : affichage simple */}
      <p>Bonjour {nom}, je découvre React !</p>

      {/* Étape 2 : compteur */}
      <p>Compteur : {compteur}</p>

      <button onClick={() => setCompteur(compteur + 1)}>+</button>
      <button onClick={() => setCompteur(0)}>Réinitialiser</button>

      <hr />

      {/* Étape 4 : affichage du nombre total */}
      <p>Il y a {superHeros.length} super-héros dans la base.</p>

      {/* Bonus : champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher un super-héros..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Étape 5 : affichage dynamique */}
      <ul>
        {filteredHeros.map(hero => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
