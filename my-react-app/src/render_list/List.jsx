import PropTypes from "prop-types";
function List(props) {
  //receive items from app.jsx
  const fruits = props.items;

  //receive items from app.jsx
  const category = props.category;

  //alphabetical sort
  //   fruits.sort((a,b) => a.name.localeCompare(b.name))

  //reverse alphabetical sort
  //   fruits.sort((a,b) => b.name.localeCompare(a.name))

  //ascending sort
  //   fruits.sort((a,b)=>a.calories-b.calories);

  //filter fruits with higher than 75 calories
  //   const highCalFruits=fruits.filter(fruit=> fruit.calories > 75)

  //filter fruits with lower than 80 calories
  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 80);

  //use lowCalFruits.map instead of fruits.map if u want filter
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;{fruit.calories}
    </li>
  ));
  
//return will auto render all contents of array
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}
//for debugging purposes set the datatypes of each values
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  items: "[]",
};
export default List;
