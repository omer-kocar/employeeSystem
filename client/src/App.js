import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("Omer");
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      position: position,
      country: country,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          position: position,
          country: country,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <label>Wage(year):</label>
        <input
          type="number"
          onChange={(e) => {
            setWage(e.target.value);
          }}
        />
        <button onClick={addEmployee}>add employess</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>show employess</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee" key={key}>
              <h3>Name: {val.name}</h3>
              <h3>Age: {val.age}</h3>
              <h3>Position: {val.position}</h3>
              <h3>Country: {val.country}</h3>
              <h3>Wage: {val.wage}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
