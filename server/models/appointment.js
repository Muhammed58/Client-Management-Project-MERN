import mongoose from "mongoose";

const appointment = mongoose.Schema ({
    Subject: String,
    StartTime: Date,
    EndTime: Date,
    Description:String,
});
export const Appointment = mongoose.model("Appointment", appointment);

//Block Appointment Hours Collention 
const blockApphours = mongoose.Schema({
    Date: Date,
    Hour: Number,
})
export const BlockApphours = mongoose.model("BlockApphours", blockApphours);