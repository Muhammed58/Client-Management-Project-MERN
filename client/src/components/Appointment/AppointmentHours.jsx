import axios from "axios";
import Moment from "react-moment";
import React, { useState, useEffect } from 'react';
import "moment-timezone";
import "./style.css";
/* import Popup from "./Popup/Popup"; */

const Appointment =  () => {
 
  //************************************************************************** */
  const hours = [...Array(24).keys()]
  const [unAvailableDate, setunAvailableDate] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:3000/appointment')
    .then(data => setunAvailableDate(data.data))
    .catch(err => console.log(err))
  },[])

    //Set hours and availability for 24 hours
  const handleChange = (date) => {
      setunAvailableDate([
        // eslint-disable-next-line 
          ... unAvailableDate,
          {
            Date: date,
          },
        ])  
    }
  const [saveData, setsaveData] = useState([])
  //save data to the database(blockapphours) 
  const handleClick = () => {
    console.log(saveData);
    console.log(compaireDate);
    saveData.map(value => {
      const valueGetTime = value.Date.getTime()
    console.log(compaireDate.includes(valueGetTime))
    console.log(valueGetTime);
    return compaireDate.includes(valueGetTime) ? console.log('found index') : console.log('index not found');

    /* return axios.post('http://localhost:3000/appointment', value)
            .then(() => console.log("Succesfully blocked the hours" , value))
            .catch(err => console.log(err))  */
      })
    }

    //Display dates for 7 days (weekly)
    const numbers = [...Array(7).keys()]
    const dates =[]
    
    numbers.forEach(num => {
      const date = new Date()
      date.setDate(date.getDate() + (num + 1  - date.getDay()) % 7) //start from Monday
      dates.push(date)
    })

    const compaireHour = unAvailableDate.map(value => new Date(value.Date))
    const compaireDate = compaireHour.map(value => value.getTime())

    useEffect(() => { 
      console.log('compaireDate ', compaireDate)
    
      console.log('unAvailableDate ', unAvailableDate)
      // eslint-disable-next-line
    }, [compaireDate])

 
    return (
    <div className="mainDiv">
    {dates.map((date, index) =>
      <table className="greenTable" key={index}>
              <thead>
                 {/* change background color if day equal today */}
                  <tr>
                    {
                  // eslint-disable-next-line
                    date == Date() ? (
                      <th style={{backgroundColor:"brown"}}><Moment format="DD/MM/YYYY dddd">{date}</Moment></th>
                      ):(
                      <th><Moment format="DD/MM/YYYY dddd">{date}</Moment></th>
                    )}
                  </tr>
              </thead>
             {/*  <hr /> */}
              <tbody>
                  {hours.map((hour,index)=>{
                    const setDate = new Date(date.setHours(hour,0,0,0))// set hours by using the numbers that under date vertically
                    return  <tr key={index} >
                                  <td>
                                      <div id="hours" >
                                          {//check hours if unavailabe in blockHours
                                            compaireDate.includes(setDate.getTime())? (
                                              
                                              <button disabled > Not Available</button>
                                            ):(
                                              <button className="button" onClick={() => {
                                                  handleChange(setDate);
                                                  console.log(setDate)
                                                  setsaveData([
                                                    ...saveData,
                                                    {
                                                    Date: setDate,
                                                  },
                                                  ])
                                               /*  setButtonPopup(true); */
                                              }}
                                              >{setDate.getHours()}:00</button>
                                            )
                                            }
                                      </div>
                                  </td> 
                            </tr>
                  })}
              </tbody>
      </table>
        )}
        <button className = 'button' type="submit" onClick={() => handleClick()}>Save</button>
     {/*  <Popup trigger={buttonPopup} setTrigger={setButtonPopup} setAppointment={setAppointment} >
        <p>Do you want to make an appointment at ?</p>
      </Popup> */}
    </div>
    )
}
export default Appointment;