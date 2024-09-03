import Student from "./prop/Students.jsx";
import UserGreeting from "./cond_render/UserGreeting.jsx";
import List from "./render_list/List.jsx";
import Button from "./click_events/Button.jsx";
import ProfilePicture from "./click_events/ProfilePicture.jsx";
import MyComponent from "./use_state/MyComponent.jsx";
import Counter from "./use_state/Counter.jsx";
import OnChange from "./on_change/OnChange.jsx";
import ColorPicker from "./color_picker/ColorPicker.jsx";
import UpdateObject from "./update_object/UpdateObject.jsx";
import UpdateArray from "./update_array/UpdateArray.jsx";
import UpdateArrayofObject from "./update_array_of_objects/UpdateArrayOfObject.jsx";
import TodoList from "./todo_list/TodoList.jsx";
import UseEffect from "./use_effect/UseEffect.jsx";
import UseEffect2 from "./use_effect/UseEffect2.jsx";
import DigitalClock from "./digital_clock/DigitalClock.jsx";
import ComponentA from "./use_context/ComponentA.jsx";
import UseRef from "./UseRef.jsx";


function App() {
  let char1 = 30;
  let char2 = 42;
// use {} around array elements will make them an object/map/dictionary/key-value pairs
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 80 },
    { id: 3, name: "banana", calories: 50 },
    { id: 4, name: "durian", calories: 79 },
    { id: 5, name: "mango", calories: 60 },
  ];

  const vegetables = [
    { id: 6, name: "potato", calories: 124 },
    { id: 7, name: "celery", calories: 90 },
    { id: 8, name: "carrots", calories: 80 },
    { id: 9, name: "corn", calories: 45 },
    { id: 10, name: "broccoli", calories: 70 },
  ];

  return (
    <>
      <div className="props">
        <Student name="Spongebob" age={char1} isStudent={true} />
        <Student name="Patrick" age={char2} isStudent={false} />
      </div>

      <div className="cond-render">
        <UserGreeting isLoggedIn={true} username="hello" />
      </div>

      <div className="render-list">

        {/* only diplays if the array is not empty */}
        {fruits.length > 0 ? <List items={fruits} category= "Fruits" /> : null}

        {/* alternative to ternary (?:) */}
        {vegetables.length > 0 && <List items={vegetables} category= "Vegetables" />}
      </div>

      <div className="click-events">
        <Button />
        <ProfilePicture />
      </div>

      <div className="use-state">
        <MyComponent />
        <Counter />
      </div>

      <div className="on-change">
        <OnChange />
      </div>

      <div className="color-picker">
        <ColorPicker />
      </div>
      <div className="update-object">
        <UpdateObject />
      </div>
      <div className="update-array">
        <UpdateArray />
      </div>

      <div className="update-array-of-object">
        <UpdateArrayofObject />
      </div>

      <div className="todo-list">
        <TodoList />
      </div>

      <div className="use-effect">
        <UseEffect />
      </div>

      <div className="use-effect-2">
        <UseEffect2 />
      </div>

      <div className="digital-clock">
        <DigitalClock />
      </div>

      <div className="component-a">
        <ComponentA />
      </div>

      <div className="use-ref">
        <UseRef />
      </div>
    </>
  );
}

export default App;
