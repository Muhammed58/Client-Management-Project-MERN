import {createBlockHours, getBlockHours, loadAppointmentData, makeApp, updateAppointment} from "../controllers/appointment.js"
import {createClientInfo, deleteClient, indexClientInfo, getUpdateClient, postUpdateClient} from "../controllers/client.js";
import { login, logout, register } from "../controllers/auth.js";
const router = express.Router();
import express from "express";

//Show Clients All Info
router.route ("/clients")
    .get(indexClientInfo)

//Create a new client
router.route("/create")
    .post(createClientInfo);

//Delete the Client
router.route("/delete/:id")
    .post(deleteClient);

//Update information of the client
router.route("/edit/:id")
    .get(getUpdateClient)
    .post(postUpdateClient)


// *********************APPOİNTMENT***********************

//Edit, Delete and Add an Appointment
router.route ("/calender/UpdateData")
    .post(updateAppointment)

//Display Appointments
router.route ("/calender/LoadData")
    .post(loadAppointmentData)
    .get(loadAppointmentData)



//Make An Appointment

router.route ("/make-appointment")
    .get(makeApp)
    .post(makeApp)

//block hours and get data
router.route("/appointment")
    .get(getBlockHours)
    .post(createBlockHours)

// ********************* REGISTER AND LOGIN, LOGOUT ***********************
router.route ("/login")
    .post(login)

router.route("/register")
    .post(register)

router.route("/logout")
    .post(logout)
    .get(logout)

export default router;