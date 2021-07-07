
import Client from "../models/client.js";

//Create New Client
export const createClientInfo =  (req, res) => {
    const newClientInfo = new Client(    
    {
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        tel: req.body.telNumber,
        gender: req.body.gender,
        pregnancy: req.body.pregnancy,
        date: req.body.date,
        weight: req.body.weight,
        height: req.body.height,
        job: req.body.job,
        city: req.body.city,
        sporDuringDiet: req.body.sporDuringDiet,
        alcohol: req.body.alcohol,
        cigarette: req.body.cigarette,
        frequencySport:req.body.frequencySport,
        glassWater: req.body.glassWater,
        useSugar: req.body.useSugar,
        chronicIllness: req.body.chronicIllness,
        usingMedicine: req.body.usingMedicine,
        menopause: req.body.menopause,
        allergy: req.body.allergy,
        snackBrkfstToNoonTime: req.body.snackBrkfstToNoonTime,
        snackBrkfstToNoonFood: req.body.snackBrkfstToNoonFood,
        snackNoonToNightTime: req.body.snackNoonToNightTime,
        snackNoonToNightFood: req.body.snackNoonToNightFood,
        snackNightToSleepTime: req.body.snackNightToSleepTime,
        snackNightToSleepFood: req.body.snackNightToSleepFood,
        wakeupTime:req.body.wakeupTime,
        firstSnackTime: req.body.firstSnackTime,
        breakfastTime:req.body.breakfastTime,
        rushHour:req.body.rushHour,
        workStartTime: req.body.workStartTime,
        dinnerTime:req.body.dinnerTime,
        breakTime:req.body.breakTime,
        secondSnackTime:req.body.secondSnackTime,
        lunchTime:req.body.lunchTime,
        sleepTime:req.body.sleepTime,
        offDaywakeupTime:req.body.offDaywakeupTime,
        offDayfirstSnackTime: req.body.offDayfirstSnackTime,
        offDaybreakfastTime:req.body.offDaybreakfastTime,
        offDayrushHour:req.body.offDayrushHour,
        offDayworkStartTime: req.body.offDayworkStartTime,
        offDaydinnerTime:req.body.offDaydinnerTime,
        offDaybreakTime:req.body.offDaybreakTime,
        offDaysecondSnackTime:req.body.offDaysecondSnackTime,
        offDaylunchTime:req.body.offDaylunchTime,
        offDaysleepTime:req.body.offDaysleepTime,
        wakeUpFood:req.body.wakeUpFood,
        breakfastFood:req.body.breakfastFood,
        firstSnackFood:req.body.firstSnackFood,
        lunchFood:req.body.lunchFood,
        secondSnackFood:req.body.secondSnackFood,
        dinnerFood:req.body.dinnerFood,
        nightTimeFood:req.body.nightTimeFood,
        offDaywakeUpFood:req.body.offDaywakeUpFood,
        offDaybreakfastFood:req.body.offDaybreakfastFood,
        offDayfirstSnackFood:req.body.offDayfirstSnackFood,
        offDaylunchFood:req.body.offDaylunchFood,
        offDaysecondSnackFood:req.body.offDaysecondSnackFood,
        offDaydinnerFood:req.body.offDaydinnerFood,
        offDaynightTimeFood:req.body.offDaynightTimeFood,
    
    });
    newClientInfo.save();
    res.redirect("/clients")
};



//Display clients info in table
export const indexClientInfo = (req, res) => {
    Client.find()
        .then(foundClients=>res.json(foundClients))
};

//Delete a client 
export const deleteClient = async (req, res) => {
    const clientId = req.params.id;
    console.log(clientId);
    await Client.findOneAndDelete({_id:clientId},
    (err) => {
        if (!err) {
            console.log("member successfully deleted")
        }
        else {
            console.log("error")
        }
        res.redirect("/clients"); 
    }) 
};

//Update the information of the client
export const getUpdateClient = (req, res) => {
    const clientId = req.params.id;
    console.log(clientId);
    Client.findOne({_id: clientId})
        .then(foundClients=>res.json(foundClients))
        .catch(err => console.log(err))
}

export const postUpdateClient = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Client.updateOne({_id: id}, data , (err)=>{
        if(err) {
            console.log(err);
        }else{
            console.log("Succesfully updated");
        }
    })
    
}

    

export default {
    createClientInfo,
    indexClientInfo,
    deleteClient,
    getUpdateClient,
    postUpdateClient
};