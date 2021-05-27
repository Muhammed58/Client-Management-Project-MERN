import React from "react";
import Edit from "../Client/Edit";
import Mealplan from "../Mealplan/Mealplan";
import Calender from "../Calender/Calender";
import Analysis from "../Analysis/Analysis";
import Dashboard from "../Dashboard/Dashboard";
import Dropdown from 'react-bootstrap/Dropdown';
import CreateClient from "../Client/CreateClient";
import DisplayClients from "../Client/displayClient";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Settings from "../Settings/Settings";
import Payment from "../Payment/Payment";
import Recipes from "../Recipes/Recipes";
import Appointment from "../Appointment/Appointment";
import Account from "../Account/Account";
import MakeAppointment from "../Appointment/MakeAppointment";
import CreateMealplan from "../Mealplan/CreateMealplan";
import CreateRecipes from "../Recipes/CreateRecipes";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: "/create",
        main: () => <CreateClient />
    },
    {
        path: "/clients",
        main: () => <DisplayClients />
    },
    {
        path: "/edit/:id",
        main: () => <Edit />
    },
    {
        path: "/meal",
        main: () => <Mealplan />
    },
    {
        path: "/create-meal",
        main: () => <CreateMealplan />
    },
    {
        path: "/calender",
        main: () => <Calender />
    },
    {
        path: "/analysis",
        main: () => <Analysis />
    },
    {
        path: "/settings",
        main: () => <Settings />
    },
    {
        path: "/payment",
        main: () => <Payment />
    },
    {
        path: "/recipes",
        main: () => <Recipes />
    },
    {
        path: "/create-recipes",
        main: () => <CreateRecipes />
    },
    {
        path: "/appointment",
        main: () => <Appointment />
    },
    {
        path: "/make-appointment",
        main: () => <MakeAppointment />
    },
    {
        path: "/appointment",
        main: () => <Appointment />
    },
    {
        path: "/account",
        main: () => <Account/>
    },
];

const NavBar = () => {
    
    return (
        <Router>
        <div className="smBodyContainer">
            <div className="grid-container">
                <div className="TopBar">
                    <Link to="/">
                        <div className="topBar-logo">
                            <h4>Ema<i id="logo">Nutrition</i></h4>
                        </div> 
                    </Link>
                    <Dropdown className="dropdown-box">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <i className="fas fa-user" id="fa-user"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="drop-menu-show">
                            <Dropdown.Item href="/account">
                                    My Account
                            </Dropdown.Item>
                            <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <ul className="SideBar"> 
                            <Link to="/">
                                <div className="sideBarLink">
                                    <i className=" fas fa-tachometer-alt"></i>
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                            <Link to="/clients">
                                <div className="sideBarLink"> 
                                    <i className="fas fa-user-friends"></i>
                                    <span>Clients</span>
                                </div>
                            </Link>
                            <Link to="/recipes">
                                <div className="sideBarLink">
                                    <i className="fas fa-receipt"></i> 
                                    <span>Recipes</span>
                                </div>
                            </Link>
                            <Link to="/calender">
                                <div className="sideBarLink"> 
                                    <i className="fas fa-calendar-alt"></i>
                                    <span>Calender</span>
                                </div>
                            </Link>
                            <Link to="/payment">
                                <div className="sideBarLink"> 
                                <i className="fas fa-credit-card"></i>
                                <span>Payment</span>
                                </div>
                            </Link>
                            <Link to="/settings">
                                <div className="sideBarLink"> 
                                <i className="fas fa-cog"></i>
                                <span>Settings</span>
                                </div>
                            </Link>
                    </ul>
                </div>
                <div className="Main">
                    <div className="Pages">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                                ))}
                        </Switch>
                    </div>    
                </div>
            </div>
        </div>
        </Router>
    );
}

export default NavBar;