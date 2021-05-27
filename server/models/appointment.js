import mongoose from "mongoose";

const appointment = mongoose.Schema ({
 
    Subject: String,
    StartTime: Date,
    EndTime: Date,
    Description:String,
});

const Appointment = mongoose.model("Appointment", appointment);

export default Appointment;