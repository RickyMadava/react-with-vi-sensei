import { useState } from "react";
import Fruit from "../components/Fruits";
import FruitsForm from "../components/FruitsForm";
import "./styles.css";

export default function App() {
  //STATE
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Banane" },
    { id: 2, nom: "Pêche" },
    { id: 3, nom: "Nèfle de japon" }
  ]);

  //COMPORTEMENT
  const handleDelete = (id) => {
    console.log(id);
    //Copie du state
    const fruitsCopy = [...fruits];
    //Manip du state
    const fruitsCopyUptadeted = fruitsCopy.filter((fruit) => fruit.id !== id);
    //Modif du state avec le setter
    setFruits(fruitsCopyUptadeted);
  };

  const handleAdd = (fruitAAjouter) => {
    //Copie du state
    const fruitsCopy = [...fruits];
    //Manip du state
    fruitsCopy.push(fruitAAjouter);
    //Modif du state avec le setter
    setFruits(fruitsCopy);
  };

  //Affichage
  return (
    <div>
      <h1>Liste des fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onFruitDelete={handleDelete}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitsForm handleAdd={handleAdd} />
    </div>
  );
}

//1.
