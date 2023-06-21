import React, { useEffect, useState } from 'react';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Users Table</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Username</th>
            <th>Password</th>
            <th>Birthdate</th>
            <th>Image</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
            <th>Hair(color, Type)</th>
            <th>Domain</th>
            <th>IP</th>
            <th>Address</th>
            <th>MAC Address</th>
            <th>University</th>
            <th>Card Expire</th>
            <th>Card Number</th>
            <th>Card Type</th>
            <th>Currency</th>
            <th>IBAN</th>
            <th>Company Address</th>
            <th>Department</th>
            <th>Name</th>
            <th>Title</th>
            <th>EIN</th>
            <th>SSN</th>
            <th>User Agent</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.birthDate}</td>
              <td>{user.image}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.eyeColor}</td>
              <td>{`${user.hair.color}, ${user.hair.type}`}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{`${user.address.city}, ${user.address.coordinates.lat}, ${user.address.coordinates.lng}, ${user.address.postalCode}, ${user.address.state}`}</td>
              <td>{user.macAddress}</td>
              <td>{user.university}</td>
              <td>{user.bank.cardExpire}</td>
              <td>{user.bank.cardNumber}</td>
              <td>{user.bank.cardType}</td>
              <td>{user.bank.currency}</td>
              <td>{user.bank.iban}</td>
              <td>{`${user.company.address.address}, ${user.company.address.city}, ${user.company.address.coordinates.lat}, ${user.company.address.coordinates.lng},${user.company.address.postalCode}, ${user.company.address.state}`}</td>
              <td>{user.company.department}</td>
              <td>{user.company.name}</td>
              <td>{user.company.title}</td>
              <td>{user.ein}</td>
              <td>{user.ssn}</td>
              <td>{user.userAgent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
