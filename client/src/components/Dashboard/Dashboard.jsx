import React, {useEffect, useState } from 'react';
// eslint-disable-next-line 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {getClients, getAppointment} from "../api";
import "./style.css";

const Dashboard = () => {

    const [clients, setClients] = useState([]);
    const [appointments, setAppoitments] = useState([]);

    useEffect(()=>{
        //CLIENT length
        const fetchClients = async () =>{
            const persons = await getClients()
            setClients(persons)
        }
        fetchClients()
        
        //APPOİNTMENTS length
        const fetchAppointments = async () =>{
            const appointiment = await getAppointment()
            setAppoitments(appointiment)
        }
        fetchAppointments()
    },[])


    return (
        <div className="main-container">
            <h1>Dashboard</h1>

            <div className="cardBox d-flex flex-wrap justify-content-evenly ">
                <div className="card text-center" style={{backgroundColor:"#418BCA"}}>
                    <Link to="/clients">
                        <div className="icon-box">    
                                <i className="fas fa-user-friends dash-icon"> {clients.length}</i>
                                <h5>My Clients</h5>
                        </div>
                    </Link>
                    <div className="card-body d-flex justify-content-center">
                        <Link to="/create"> 
                        <button type="submit" className="dash-button btn" ><span className="btn-span">+</span>Create Client</button>
                        </Link>                    
                    </div>
                </div>
                <div className="card text-center" style={{backgroundColor:"#E05D6F"}}>
                    <Link to="/appointment">
                        <div className="icon-box">
                            <i className="far fa-calendar-check dash-icon"> {appointments.length}</i>
                            <h5>Appointments</h5>
                        </div>
                    </Link>
                    <div className="card-body d-flex justify-content-center">
                        <Link to="/make-appointment"> 
                            <button type="submit" className="dash-button btn" ><span className="btn-span">+</span>Make Appointment</button>
                        </Link>                    
                    </div>
                </div>
                <div className="card text-center" style={{backgroundColor:"#16A085"}}>
                    <Link to="/meal">
                        <div className="icon-box">
                            <i className="fas fa-concierge-bell dash-icon"></i>
                            <h5>Meal Plan</h5>
                        </div>
                    </Link>
                    <div className="card-body d-flex justify-content-center">
                        <Link to="/create-meal"> 
                            <button type="submit" className="dash-button btn" ><span className="btn-span">+</span>Create Meal Plan</button>
                        </Link>                    
                    </div>
                </div>
                <div className="card text-center" style={{backgroundColor:"orangered"}}>
                    <Link to="/recipes">
                        <div className="icon-box">
                            <i className="fas fa-receipt dash-icon"></i> 
                            <h5>Recipes</h5>
                        </div>
                    </Link>
                    <div className="card-body d-flex justify-content-center">
                        <Link to="/create-recipes"> 
                            <button type="submit" className="dash-button btn"><span className="btn-span">+</span>Create Recipes</button>
                        </Link>                    
                    </div>
                </div>
                <Link to="/calender">
                    <div className="card secondBlock text-center" style={{backgroundColor:"#ce1212"}}  >
                        <i className="fas fa-calendar-alt dash-icon"> </i>
                        <h5>My Calender</h5>
                    </div>
                </Link>
                <Link to="/payment">
                    <div className="card secondBlock text-center" >
                        <i className="fas fa-credit-card dash-icon"></i>
                        <h5>Payment</h5>
                    </div>
                </Link>
                <Link to="/analysis">
                    <div className="card secondBlock text-center" style={{backgroundColor:"#583d72"}}>
                        <i className="far fa-chart-bar dash-icon"></i>                    
                        <h5>Analysis</h5>
                    </div>
                </Link>
                <Link to="/settings">
                    <div className="card secondBlock text-center" style={{backgroundColor:"#206a5d"}} >
                        <i className="fas fa-cog dash-icon"></i>
                        <h5>Settings</h5>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Dashboard;
