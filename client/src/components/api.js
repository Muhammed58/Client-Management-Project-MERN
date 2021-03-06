
// get,post and update CLİENT
export const getClients = () => fetch("http://https://dietatian-management-app.herokuapp.com/:8080/clients").then(res => res.json())

export const createNewClient = (client) => fetch("http://https://dietatian-management-app.herokuapp.com/:8080/create", {
    method:"POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(client)
})

export const updateClient = (client, id) => fetch(`http://https://dietatian-management-app.herokuapp.com/:8080/edit/${id}`,{
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(client)
})

export const getClient = (id) => fetch(`http://https://dietatian-management-app.herokuapp.com/:8080/edit/${id}`).then(res => res.json())


//Get data from APPOİNTMENTS
export const getAppointment = (id) => fetch(`http://https://dietatian-management-app.herokuapp.com/:8080/calender/LoadData`).then(res => res.json())


// Get unavailable date and hours from database

export const getUnavailableAppointment = () => fetch('http://https://dietatian-management-app.herokuapp.com/:8080/appointment').then(res =>res.json())



//get foods info from FOOD DATA CENTRAL
/* const api_key= "jfydyYtSssxWxQzKc91OHN1cnTu0XQbR7vdRHndp"
const data_types = "Survey (FNDDS)";
const pagesize = 5;
const api_url = 
`https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=${pagesize}&dataType=${data_types}&api_key=${api_key}`;


export const getFood = () => fetch(api_url).then(res => res.json())

getFood().then(data => console.log(data.foods[2])) */



