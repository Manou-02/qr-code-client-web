import React, { useEffect, useState } from 'react'
import axios from "axios";

const db_uri = "http://localhost:5000/users";

const TableUser = () => {


      const [user, setUser] = useState([]);
      
      const getAllUser = async () => {
            axios.get(db_uri).then(docs => {
                  console.log(docs.data);
                  setUser(docs.data)
            }).catch(err => {
                  console.log(err);
            })
      }

      useEffect(() => {
            getAllUser();
      }, [])

  return (
    <div>
          <h3>Table User</h3>
          <table border="1">
                <thead>
                      <tr>
                        <td> #ID </td>
                        <td> N° Matricule </td>
                        <td> Name </td>
                        <td> Firstname </td>
                        <td> Qr </td>
                        <td> Actions </td>
                      </tr>
                </thead>
                <tbody>
                        {user.map(u => (
                              <tr>
                                    <td> {u._id} </td>
                                    <td> {u.matricule} </td>
                                    <td> {u.name} </td>
                                    <td> {u.firstname} </td>
                                    <td>
                                          <a href={u.qr} download>

                                                <img src={u.qr} alt="" />
                                          </a>
                                    </td>
                              </tr>
                        ))}
                </tbody>
          </table>
    </div>
  )

}

export default TableUser;