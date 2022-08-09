import { useState } from "react";

export default function FruitsForm({ handleAdd }) {
  //state
  const [newFruits, setNewFruits] = useState("");
  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();

    //Manip du state
    const id = new Date().getTime();
    const nom = newFruits;
    const fruitAAjouter = { id, nom };
    //Modif du state avec le setter
    handleAdd(fruitAAjouter);
    setNewFruits("");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewFruits(e.target.value);
  };
  //affichage
  return (
    <form action="sumbit" onSubmit={handleSubmit}>
      <input
        value={newFruits}
        type="text"
        name=""
        placeholder="Ajouter un fruit ..."
        id=""
        onChange={handleChange}
      />
      <button>Ajouter un fruit</button>
    </form>
  );
}
