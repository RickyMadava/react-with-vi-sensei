export default function Fruit({ fruitInfo, onFruitDelete }) {
  //STATE

  //COMPORTEMENT

  //AFFICHAGE
  return (
    <li>
      {fruitInfo.nom}{" "}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
  );
}
