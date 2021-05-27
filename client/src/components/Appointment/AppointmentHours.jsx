import React, { useState, useEffect } from 'react';
import Moment from "react-moment";
import axios from "axios";
import "moment-timezone";
import Popup from "./Popup/Popup";
import "./style.css"

const AppointmentHours = () => {
  
  //Set hours and availability from 0.00 am to 23.00 pm
  const [isHour, setHour] = useState([]);
  const times = []
  const database = [15]
  useEffect(() => {
    setHour(times); 
  }, [])
    const hours = [...Array(24).keys()]
    hours.forEach(num => {
      //check hours if unavailabe in database
      if(num == database) {
        const unavailableHours = {
          time: database + ":00",
          available:false
        }
        times.push(unavailableHours)
        
      } else {
        const allHours= {
          time: num + ":00",
          available: true,
        } 
        times.push(allHours)
      }
    })

      
    //Display dates for 7 days (weekly)
    const numbers = [...Array(7).keys()]
    const dates =[]
    
    numbers.forEach(num => {
      const date = new Date()
      date.setDate(date.getDate() + (num + 1  - date.getDay()) % 7) //start from Monday
      dates.push(date)
    })
    
    //Send selected Appointment date (include the hour)
    const [onchange, setChange] = useState();
    const [makeAppointment, setAppointment] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    
    useEffect(() => {
      if(!onchange == "") {        
        const url = "http://localhost:3000/make-appointment";
        
        const appHours = onchange.Hour.toString();
        const getHour = appHours.split(":")[0]; 
   

        const getDate = onchange.StartTime;
        const appDate = new Date(getDate.setHours(getHour));
        const appDateMinutes = new Date(getDate.setMinutes(0));
        
        
        const setEndTimeHour = parseInt(getHour);
        const setEndTime = onchange.EndTime;
        const EndTime = Date(setEndTime.setHours(setEndTimeHour +1));
        const setEndTimeMinutes = new Date(setEndTime.setMinutes(0));
      
        
        if(makeAppointment == true) {
          axios.post(url, onchange)
          .then(() => console.log("Succesfully Completed Appointment at" ,setEndTimeHour, appHours, appDate))
          .catch(err => console.log(err))
          setAppointment(false);
        }
      }
    }, [makeAppointment])
    
    return (
    <div className="mainDiv">
        {dates.map((date, index) =>
      <table className="greenTable" key={index}>
              <thead>
                 {/* change background color if day equal today */}
                  <tr>
                    {date == Date() ? (
                      <th style={{backgroundColor:"brown"}}><Moment format="DD/MM/YYYY dddd">{date}</Moment></th>
                      ):(
                      <th><Moment format="DD/MM/YYYY dddd">{date}</Moment></th>
                    )}
                  </tr>
              </thead>
              {/* <hr /> */}
              <tbody>
                  {isHour.map((hour,index)=>{
                    return  <tr key={index} >
                                  <td>
                                      <div id="hours">
                                          {hour.available ? (
                                            <button className="button" onClick={() => {
                                              setChange(
                                                {
                                                  Subject:"test subject1",
                                                  StartTime: date, 
                                                  EndTime: date,
                                                  Hour: hour.time,
                                                  Description:"test1 description"
                                                },
                                              );
                                              setButtonPopup(true);
                                            }
                                            }>{hour.time}</button>
                                            ):(
                                              <button className="button" disabled>Not Available</button>
                                            )}
                                      </div>
                                  </td>
                                  
                            </tr>
                  })}
              </tbody>
      </table>
        )}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} setAppointment={setAppointment} >
        <p>Do you want to make an appointment at ?</p>
      </Popup>
    </div>
    )
}

export default AppointmentHours;
