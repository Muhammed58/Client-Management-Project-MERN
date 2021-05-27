import React from 'react';
import "./style.css";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Inject, ScheduleComponent, ViewsDirective,
        ViewDirective, Day, Week, WorkWeek, Month, 
        Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-react-schedule"
    
        
const Calender = () => {
    
    const dataManager = new DataManager({
        url: "http://localhost:3000/calender/LoadData",
        crudUrl: "http://localhost:3000/calender/UpdateData",
        crossDomain: true,
        adaptor: new UrlAdaptor()
    });
    
    return (
        <div>
            <ScheduleComponent  
                    id="Schedule"
                    height="550px" 
                    eventSettings={{dataSource: dataManager}}>
                <ViewsDirective>
                <ViewDirective option="Day" />
                <ViewDirective option="Week" />
                <ViewDirective option="WorkWeek" />
                <ViewDirective option="Month" />
                <ViewDirective option="Agenda" />
                </ViewsDirective>
                <Inject
                services={[
                    Day,
                    Week,
                    WorkWeek,
                    Month,
                    Agenda,
                    Resize,
                    DragAndDrop
                ]}
                />
            </ScheduleComponent>
        </div>
    )
}

export default Calender;
