import React from 'react';
import './popup.css';
/* import { useHistory } from 'react-router-dom' */
/* 
const history = useHistory(); */

const Popup = (props) => {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                
                {props.children}    
                <button className="make-button btn btn-success" onClick={() => {props.setAppointment(true); props.setTrigger(false);/*  history.push("/calender/LoadData") */} }>Make Appointment</button>
                <button className="cancel-button btn btn-danger" onClick={() => props.setTrigger(false)}>Cancel</button>
            </div>
        </div>
    ): "";
}

export default Popup;
