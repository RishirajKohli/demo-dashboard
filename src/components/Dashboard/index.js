import React from "react";
import Row from "../Row/Row";

const rawUserData = [
  {
    name: "Risabh",
    age: 24,
    phoneNumber: "19231239123",
  },
  {
    name: "Risabh",
    age: 24,
    phoneNumber: "19231239123",
  },
  {
    name: "Risabh",
    age: 24,
    phoneNumber: "19231239123",
  },
];

const Dashboard = () => {
  debugger;
  return (
    <div className="dashboard">
      {rawUserData.map((user, index) => {
        return (
          <Row key={index}>
            {Object.values(user).map((col, i) => (
              <div key={i}>{col}</div>
            ))}
          </Row>
        );
      })}
    </div>
  );
};

export default Dashboard;
