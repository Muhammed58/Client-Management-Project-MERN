import React, { useState, useEffect } from 'react';
import Popup from "./Popup/Popup";
import Moment from "react-moment";
import axios from "axios";
import "moment-timezone";
import "./style.css";


const Appointment = () => {
    const [blockHours, setblockHours] = useState([])
    const [blockDates, setblockDates] = useState([])
    useEffect(() => {
        console.log("this is blockHours ", blockHours);
        console.log("this is blockDates ", blockDates);

    }, [blockHours])

    //send the clicked hour to the array named blockHours in useState
    const handleChange = (event, date) => {
        //check hour and date if selected before
        const hourIndex = blockHours.findIndex(item => item == event);
        const dateIndex = blockDates.findIndex(item2 => item2 == date); 
        //remove the double clicked hour from blockHours (an array in useState)
        if(blockHours.includes(event) && blockDates.includes(date)) {
            blockHours.splice(hourIndex,1);
            blockDates.splice(dateIndex,1);
            console.log("this is second = " , blockHours, blockDates);
        }else {
            setblockHours([...blockHours, event]);
            setblockDates([...blockDates, date]);
        }
    }
    const handleClick = () => {
        console.log(blockHours);
    }
    //***************************************************************************************************** */
    //Set hours and availability for 24 hours
  const [isHour, setHour] = useState([]);
  const times = []
  /* const blockHours = [3,5,9,0] */
  useEffect(() => {
    setHour(times); 
  }, [])
  const hours = [...Array(24).keys()]
  
  hours.forEach(num => {
  
    //check hours if unavailabe in blockHours
    if(blockHours.includes(num)) {
      const unavailableHours = {
        time: num + ":00",
        available: false
      }
      times.push(unavailableHours)
    }else {
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
/*     const [buttonPopup, setButtonPopup] = useState(false);
 */    
    useEffect(() => {
      if(!onchange == "") {

        const appHours = onchange.Hour.toString();
        const getHour = appHours.split(":")[0]; 
        
        //Set start and end hour of appointment 
        const getDate = onchange.StartTime;
        const appDate = new Date(getDate.setHours(getHour)); //for adding start time clicked on date sent to calendar
        const appDateMinutes = new Date(getDate.setMinutes(0));
      
        const setEndTimeHour = parseInt(getHour);
        const setEndTime = onchange.EndTime;
        const EndTime = Date(setEndTime.setHours(setEndTimeHour +1)); //for adding 1 hour to the start time of appointment
        const setEndTimeMinutes = new Date(setEndTime.setMinutes(0));

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
                                                handleChange(hour.time, date.setHours(0,0,0,0));
                                                setChange(
                                                {
                                                  Subject:"test subject1",
                                                  StartTime: date, 
                                                  EndTime: date,
                                                  Hour: hour.time,
                                                  Description:"test1 description"
                                                },
                                              );
                                             /*  setButtonPopup(true); */
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
     {/*  <Popup trigger={buttonPopup} setTrigger={setButtonPopup} setAppointment={setAppointment} >
        <p>Do you want to make an appointment at ?</p>
      </Popup> */}
    </div>
        
    )
}

export default Appointment;