import React, { useState, useEffect } from "react";
import { ClientForm } from "./ClientForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getClient, updateClient } from "../api";


const Edit = () => {
  
    const match = useRouteMatch();
    const [client, setClient] = useState();
    const history = useHistory()

    useEffect(()=>{
      const fetchClient = async () => {
        const client = await getClient(match.params.id)
        console.log(client);
        setClient(client)
      }
      fetchClient()
    }, []);
    
    const onSubmit = async (data) =>{
      history.push("/clients")
      await updateClient(data, match.params.id)
    }
    
    return client ? ( 
          <div className= "form-container w-50 ms-5">
            <h1 className="text-center bg-primary bg-gradient text-wrap text-white">Update Client</h1>
            <ClientForm client= {client}  onSubmit={onSubmit} />
        
          </div>
    ): ( <div>Loading...</div> )
}

export default Edit;

 