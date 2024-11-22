import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  console.log("appHost", process.env.REACT_APP_API_BASE_URL);
  const apiEndPoint = process.env.REACT_APP_API_BASE_URL || "/api";
  // Fetch users data from the API
  useEffect(() => {
    fetch(`${apiEndPoint}/data`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data from backend", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="App container mt-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h3 className="display-4">Simple React-Node APP</h3>
          <p className="lead">Using Kubernetes as container orchestration</p>
          <h4>Amazon EKS:</h4>
          <p>Deployed successfully</p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h4>User List:</h4>
          {users.length > 0 ? (
            <div className="list-group">
              {users.map((user, index) => (
                <li key={index} className="list-group-item">
                  {user.name}
                </li>
              ))}
            </div>
          ) : (
            <p>Loading users...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
