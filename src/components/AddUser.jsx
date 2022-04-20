import React, { useState } from 'react'
import axios from "axios";

const db_uri = "http://localhost:5000/users";

export const AddUser = () => {

      const [info, setInfo] = useState({
            matricule : "",
            name : "",
            firstname : ""
      });
      const [show, setShow] = useState(false);

      const onChangeInputHandler = e => {
            const {name, value} = e.target;

            setInfo(prev => ({
                  ...prev,
                  [name] : value
            }));
      }

      const onSubmitHandler = e => {
            e.preventDefault();
            console.log(info);

            axios.post(db_uri, info).then(docs => {
                  console.log(docs);
            }).catch(err => {
                  console.log(err);
            })
      }

      return (
            <div>

                  <button className='bg-blue-700 outline-none py-2 px-4 text-slate-50' onClick={() => setShow(!show)}>Ajouter</button><br />
            {show &&
            (

                  <div className="">
                        <input type="text" value={info.matricule} name="matricule" onChange={onChangeInputHandler} placeholder="Matricule" /><br /><br />
                        <input type="text" value={info.name} name="name" onChange={onChangeInputHandler} placeholder="Nom" /><br /><br />
                        <input type="text" value={info.firstname} name="firstname"  onChange={onChangeInputHandler} placeholder="Prènom" /><br /><br />
                        <button onClick={onSubmitHandler}> Sauvegarder </button>
                  </div>
            )}
            </div>
      )
}
