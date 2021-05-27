import express from "express";
const router = express.Router();
import { loadAppointmentData, makeApp, updateAppointment} from "../controllers/appointment.js"
import {createClientInfo, deleteClient, indexClientInfo, getUpdateClient, postUpdateClient} from "../controllers/client.js";

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

router. route ("/make-appointment")
    .get(makeApp)
    .post(makeApp)


export default router;