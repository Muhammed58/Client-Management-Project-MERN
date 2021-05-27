import React, { useEffect, useState } from 'react'
import "./style.css";
/* import {getFood} from "../api" */


const Mealplan = () => {
    
    
    const [searchTerm, setSearchTerm] = useState("");
    const [foodname, setFoodname] = useState("");
    const [foods, setFoods] = useState();
    const [nutrition, setNutrition] = useState();
    const [unitName, setUnitName] = useState();
    
    const api_key= "jfydyYtSssxWxQzKc91OHN1cnTu0XQbR7vdRHndp"
    const data_types = "Survey (FNDDS)";
    const pagesize = 5;
    const api_url = 
    `https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodname}&pageSize=${pagesize}&dataType=${data_types}&api_key=${api_key}`;
    
    //get data and set usestates
    useEffect(()=>{
        const getFood = () => fetch(api_url).then(res => res.json())
        getFood().then(data => {
            setFoods(data.foods[2].foodNutrients[0].value)
            setNutrition(data.foods[2].foodNutrients[0].nutrientName)
            setUnitName(data.foods[0].description)
        })
    },[foodname])   
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setFoodname(searchTerm)
    }
    return(  
        <div className="meal-div">
            <h1>Meal Plan</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Food Name:
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>{searchTerm}</p>
            <p>{unitName}</p>
            <p>{nutrition}: {foods}</p>
        </div>
    )
}

export default Mealplan;
