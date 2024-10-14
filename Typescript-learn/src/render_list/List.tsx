
interface Fruit {
  id: number;
  name: string;
  calories: number;
}

interface ListProps {
  category?: string; // Optional property
  items?: Fruit[];   // Optional property
}

// Convert the List component to use TypeScript
const List: React.FC<ListProps> = ({ category , items = [] }) => {

  //alphabetical sort
  //   fruits.sort((a,b) => a.name.localeCompare(b.name))

  //reverse alphabetical sort
  //   fruits.sort((a,b) => b.name.localeCompare(a.name))

  //ascending sort
  //   fruits.sort((a,b)=>a.calories-b.calories);

  //filter fruits with higher than 75 calories
  //   const highCalFruits=fruits.filter(fruit=> fruit.calories > 75)

  //filter fruits with lower than 80 calories
  const lowCalFruits = items.filter((fruit) => fruit.calories < 80);

  //use lowCalFruits.map instead of fruits.map if u want filter
  const listItems = items.map((items) => (
    <li key={items.id}>
      {items.name}: &nbsp;{items.calories}
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

export default List