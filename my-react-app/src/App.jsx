import Student from "./prop/Students.jsx";
import UserGreeting from "./cond_render/UserGreeting.jsx";

function App() {
  let char1 = 30;
  let char2 = 42;
  return (
    <>
      <div className="props">
        <Student name="Spongebob" age={char1} isStudent={true} />
        <Student name="Patrick" age={char2} isStudent={false} />
      </div>

      <div className="cond-render">
        <UserGreeting isLoggedIn={true} username="hello"/>
      </div>
    </>
  );
}

export default App;
