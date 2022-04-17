import React, { useEffect, useState } from 'react'
import axios from 'axios'

const uri = "http://localhost:5000/presence";

const TablePresence = () => {

      const [presence, setPresence] = useState([]);
      const [user, setUser] = useState({})

      const getPresence = async () => {
            await axios.get(uri).then((docs) => {
                  setPresence(docs.data);
            }).catch(err => {
                  console.log(err);
            })
            console.log(presence);
      }

      useEffect(()  => {
            getPresence();
      }, [])

  return (
    <div>
          <h3>Table Presence</h3>
          <table border="1" style={{border : ''}}>
                <thead>
                      <tr>
                            <th>#ID</th>
                            <th>N° Matricule</th>
                            <th>Date</th>
                            <th>Presence</th>
                      </tr>
                </thead>
                <tbody>
                      {presence.map(p => (
                            <tr>
                                  <td> {p._id} </td>
                                  <td> {p.user} </td>
                                  <td> {p.createdAt} </td>
                                  <td> {p.presence ? "p" : ""} </td>
                                  
                            </tr>
                      )
                      )}
                </tbody>
          </table>
    </div>
  )
}

export default TablePresence;
