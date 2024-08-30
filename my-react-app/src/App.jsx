import Student from "./prop/Students.jsx";
import UserGreeting from "./cond_render/UserGreeting.jsx";
import List from "./render_list/List.jsx";
import Button from "./click_events/Button.jsx";
import ProfilePicture from "./click_events/ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

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
    </>
  );
}

export default App;
