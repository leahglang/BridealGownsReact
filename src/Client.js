import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
const Client = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5124/api/clients')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const txt = { "textAlign": "center" }
  return (
    <center>
      <table class="table table-striped" style={{ "width": "50rem", "alignContent": "center", "color": "white" }}>
        <tr>
          <th style={txt}>Name</th>
          <th style={txt}>Email</th>
          <th style={txt}>Phone Number</th>
          <th style={txt}>Password</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td style={txt}>{user.firstName + " " + user.lastName}</td>
            <td style={txt}>{user.email}</td>
            <td style={txt}>{user.phoneNumber}</td>
            <td style={txt}>{user.password}</td>
          </tr>
        ))}
      </table>
    </center>
  );
};
export default Client;

