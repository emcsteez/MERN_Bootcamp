import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
      firstName={"Elijah"}
      lastName={"Bowers"}
      age= {"29"}
      hairColor={"Black"}/>
      <Person 
      firstName={"Emily"}
      lastName={"Bowers"}
      age= {"28"}
      hairColor={"Black"}/>
      <Person 
      firstName={"Arlon"}
      lastName={"Tousley"}
      age= {"29"}
      hairColor={"Brown"}/>
      <Person 
      firstName={"Fleetwood"}
      lastName={"Bowers"}
      age= {"2"}
      hairColor={"sesame"}/>
    </div>
  );
}

export default App;
