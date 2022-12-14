import './App.css';
import PersonCard from './components/PersonCard';

const peopleArr = [
  {
    firstName: "Elijah",
    lastName: "Bowers",
    age: 29,
    hairColor: "black",
  },
  {
    firstName: "Emily",
    lastName: "Bowers",
    age: 28,
    hairColor: "black",
  },
  {
    firstName: "Arlon",
    lastName: "Tousley",
    age: 29,
    hairColor: "brown",
  },
  {
    firstName: "Fleetwood",
    lastName: "Bowers",
    age: 2,
    hairColor: "sesame",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
        ))}
        {/* <PersonCard
          firstName={peopleArr[0].firstName}
          lastName={peopleArr[0].lastName}
          age={peopleArr[0].age}
          hairColor={peopleArr[0].hairColor}
        />
        <PersonCard
          firstName={peopleArr[1].firstName}
          lastName={peopleArr[1].lastName}
          age={peopleArr[1].age}
          hairColor={peopleArr[1].hairColor}
        />
        <PersonCard
          firstName={peopleArr[2].firstName}
          lastName={peopleArr[2].lastName}
          age={peopleArr[2].age}
          hairColor={peopleArr[2].hairColor}
        />
        <PersonCard
          firstName={peopleArr[3].firstName}
          lastName={peopleArr[3].lastName}
          age={peopleArr[3].age}
          hairColor={peopleArr[3].hairColor}
        /> */}
      </div>
    );
  }

export default App;

