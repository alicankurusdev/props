import "./App.css";
import Person from "./components/Person";
import data from "./data";
function App() {
  return (
    <div className="app">
      {data.map((person) => {
        return <Person name={person.name} img={person.img} tel={person.tel} />;
      })}
    </div>
  );
}

export default App;
