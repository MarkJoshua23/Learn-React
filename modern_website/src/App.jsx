import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      {/* theres pt(padding top) to not overlap in navbar */}
      <div className=" overflow-hidden">
        <Header />
      </div>
    </>
  );
};

export default App;
