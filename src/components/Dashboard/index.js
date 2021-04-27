import React, { useState } from "react";
import Row from "../Row";
import "./Dashboard.css";

const userHeader = ["NAME", "AGE", "CONTACT"];

const Dashboard = () => {
  const [rawUserData, setRawuserData] = useState([
    {
      name: "Risabh",
      age: 24,
      phoneNumber: "19231239123",
    },
    {
      name: "Ramesh",
      age: 25,
      phoneNumber: "192323123",
    },
    {
      name: "Sid",
      age: 22,
      phoneNumber: "19231239123",
    },
  ]);
  const sortByAge = () => {
    const temp = [...rawUserData];
    temp.sort((user1, user2) => (user1.age > user2.age ? 1 : -1));
    setRawuserData(temp);
  };
  return (
    <div className="dashboard">
      <button onClick={sortByAge}>Sort by Age</button>
      {
        <Row>
          {Object.values(userHeader).map((header, ind) => (
            <div className="col" key="ind">
              {header}
            </div>
          ))}
        </Row>
      }
      {rawUserData.map((user, index) => {
        return (
          <Row key={index}>
            {Object.values(user).map((col, i) => (
              <div className="col" key={i}>
                {col}
              </div>
            ))}
          </Row>
        );
      })}
    </div>
  );
};

export default Dashboard;
