import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Axios() {
  const [apiData, setApiData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [updateId, setUpdateId] = useState('');
  const [isCreateUser, setIsCreateUser] = useState(false);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
          setApiData(response.data.data);
        }
    );
  }, []);

  const deleteUser = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`).then((response) => {
      setApiData(apiData.filter((user) => user.id !== id));
    });
  }

  const handleEdit = (id) => {
    setUpdateId(id);
    setFirstName(apiData.find((user) => user.id === id).first_name);
    setLastName(apiData.find((user) => user.id === id).last_name);
    setEmail(apiData.find((user) => user.id === id).email);
  }

  const updateUser = (id) => {
    axios.put(`https://reqres.in/api/users/${id}`, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    }).then((response) => {
      console.log(response.data);
      setApiData(apiData.map((user) => (user.id === id ? response.data : user)));
      setFirstName("");
      setLastName("");
      setEmail("");
    });
  }

  const createUser = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/users", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    }).then((response) => {
      console.log(response.data);
      setApiData([...apiData, response.data]);
      setFirstName("");
      setLastName("");
      setEmail("");
      setIsCreateUser(false);
    });
  }

  return (
      <div>
        <h1>Axios</h1>
        <button onClick={() => setIsCreateUser(true)}>Create User</button>
        <br/>
        {isCreateUser && <form onSubmit={createUser}>
          <h2>Create User</h2>
          <table>
            <tbody>
            <tr>
              <td>
                <label>First Name</label>
                <input type="text" name="first_name" placeholder="first name" value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
              </td>
              <td>
                <label>Last Name</label>
                <input type="text" name="last_name" placeholder="last name" value={lastName}
                       onChange={(e) => setLastName(e.target.value)}/>
              </td>
              <td>
              <label>Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </td>
              <td>
                <button type="submit">Save</button>
              </td>
            </tr>
            </tbody>
          </table>
        </form>}
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>SI no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {apiData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    { data.id === updateId ? <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> : data.first_name}
                  </td>
                  <td>
                    { data.id === updateId ? <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /> : data.last_name }
                  </td>
                  <td>{ data.id === updateId ? <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> : data.email}</td>
                  <td>
                    { data.id === updateId ? <button onClick={(e) => updateUser(data.id)}>Update</button> : <button onClick={(e) => handleEdit(data.id)}>Edit</button>}
                    { data.id === updateId && <button onClick={() => setUpdateId('')}>Cancel</button>}
                    { data.id !== updateId && <button onClick={(e) => deleteUser(data.id)}>Delete</button> }
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}