import {Appointment,BlockApphours} from "../models/appointment.js"

export const updateAppointment = (req, res) => {
    
    const dataChanged = req.body.changed[0];
    const dataAdded = req.body.added[0];
    const dataDeleted = req.body.deleted[0];
 
    if(req.body.changed.length>0 ) {
        //Update an Appointment
        Appointment.updateOne({_id: dataChanged._id}, dataChanged , (err)=>{
            if(err) {
                console.log(err);
            }else{
                console.log("Succesfully updated");
            }
        })
        res.redirect("/calender/LoadData")

    }else if(req.body.added.length>0) {
        //Create an Appointment
          const createAppointment =  new Appointment ({
                   Subject: dataAdded.Subject,
                   StartTime: dataAdded.StartTime,
                   EndTime: dataAdded.EndTime,
                   Description:dataAdded.Description,
               });
           createAppointment.save();
           console.log("succesfully added", createAppointment);
           res.redirect("/calender/LoadData")
           
        }else if(req.body.deleted.length>0) {
            //Delete an Appointment
            Appointment.deleteOne({_id: dataDeleted._id}, (err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("Succesfully Deleted");
                }
            });
            res.redirect("/calender/LoadData")

    }else if(err) {
        console.log(err);
    }
};
//Display appointments from DataBase
export const loadAppointmentData = (req, res) => {
   Appointment.find()
        .then(foundAppointment => res.json(foundAppointment))
};
//Make An Appointment
export const makeApp = (req, res) => {
    const createAppointment = new Appointment ({
        Subject: req.body.Subject,
        StartTime: req.body.StartTime,
        EndTime: req.body.EndTime,
        Description:req.body.Description,
    });
    createAppointment.save();
    console.log("succesfully added", createAppointment);
    res.redirect("/calender")
}
// get and post block appointment hours
export const getBlockHours = async (req, res) => {
   await BlockApphours.find()
        .then(foundBlockHours => res.json(foundBlockHours))
};
export const createBlockHours = async (req, res) => {
    
        const createBlocks = new BlockApphours ({
            Date: req.body.Date,
            Hour: req.body.Hour
        });
        await createBlocks.save();

    console.log("succesfully added the block hours");
   
}
