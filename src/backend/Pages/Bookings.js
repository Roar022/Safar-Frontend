import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBarBook from "../Layout/NavBarBook";

const Bookings = () => {
  const [users, setUsers] = useState([]);

  const {id}=useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
    // console.log(result.data);
  };

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    alert("Booking Deleted Successfully")
    loadUsers();
  }

  return (
    <div className="container">
      <NavBarBook/>
      <div className="py-4">
        <table className="table table-bordered border shadow">
          <thead>
            <tr >
              <th scope="col">S No.</th>
              <th scope="col">Name</th>
              <th scope="col">Destination</th>
              {/* <th scope="col">Email</th>
              <th scope="col">Address</th> */}
              {/* <th scope="col">Phone</th> */}
              {/* <th scope="col">GuestCount</th> */}
              <th scope="col">Departure</th>
              <th scope="col">Return Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td >{user.name}</td>
                  <td >{user.userDestination}</td>
                  {/* <td >{user.email}</td> */}
                  {/* <td >{user.address}</td> */}
                  {/* <td >{user.userPhone}</td> */}
                  {/* <td >{user.userCount}</td> */}
                  <td >{user.userArrivalDate}</td>
                  <td >{user.userLeavingDate}</td>

                  <td>
                    <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                    <button className="btn btn-danger mx-2"
                    onClick={()=> deleteUser(user.id)}
                    >Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
