import ItemCount from "./ItemCount";
const ListItemContainer = ({ greeting }) => {
  console.log("Hola user", greeting);
  return (
    <>
      <h2>soy un item list</h2>
      <h3>{greeting}</h3>
      <ItemCount stock={5} initial={1} />
    </>
  );
};

export default ListItemContainer;
