import React, {useEffect, useState } from "react";
// eslint-disable-next-line 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {getClients} from "../api";
import Moment from "react-moment";
import "./style.css";
import "moment-timezone";

Moment.globalFormat = 'DD/MM/YYYY';

const DisplayClients = () => {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        const fetchClients = async () =>{
            const persons = await getClients()
            setClients(persons)
        }
        fetchClients()
        },[])

    // created currentYear for calculating age later
    const currentYear = new Date().getFullYear();

    return <div className="containerPages">

        <h1 className="clients">Clients</h1>
        <div style={{textAlign:"right"}}>
            <Link to="/create"> 
                    <button type="submit" className="btn btnSide" id="btn-createClient" >Create Client</button>
            </Link>
            <label style={{margin:"7px 10px 0 0", color:"#36a1a5"}}>Search:</label>
            <input className="form-control w-25 float-end" type="text"
            placeholder="Search by name or lastname..."
            onChange={(event)=> {
                setSearchTerm(event.target.value);
            }}/>
        </div>
            <div>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">    
                        <tr>
                            <th scope="col">Date Added</th>
                            <th scope="col">Last Updated</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Age</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Height</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>

                {/* filter for search bar and map for displaying data */}
                
                {
                // eslint-disable-next-line
                clients.filter((client)=>{
                    if(searchTerm === "") {
                        return client
                    } else if (client.fName.toLowerCase().includes(searchTerm.toLowerCase()) || client.lName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return client
                    }
                }).map((client) =>
                    <tbody key={client._id}>
                        <tr>
                            <td> <Moment parse="YYYY-MM-DD"> {client.createdAt}</Moment></td>
                            <td> <Moment format="DD/MM/YYYY HH:mm">{client.updatedAt}</Moment></td>
                            <td className="displayName">{client.fName} {client.lName}</td>
                            <td><Moment format="DD/MM/YYYY">{client.date}</Moment></td>
                            <td><b>{currentYear - parseInt(client.date)}</b></td>
                            <td>{client.weight}</td>
                            <td>{client.height}</td>
                            <td>{client.gender}</td>
                            <td>{client.email}</td>
                            <td>
                                <div className="actionButtons"> 
                                    <form action={"/delete/" + client._id} method="post">    
                                        <button className="btn btn-primary delEditBtn">
                                            <i className="far fa-trash-alt"></i> 
                                        </button>
                                    </form>
                                    
                                    <Link to={`/edit/${client._id}`}>
                                        <button className="btn btn-primary delEditBtn">
                                            <i id="editBtn" className="fas fa-user-edit"></i>
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                )}
                </table>
                
            </div>

    </div>
}

export default DisplayClients;