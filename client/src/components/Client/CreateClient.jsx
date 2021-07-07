import React  from "react";
import { createNewClient } from "../api";
import { ClientForm } from "./ClientForm";
import { useHistory } from "react-router-dom";

const CreateClient = () => {
    const history = useHistory()

    const onSubmit = async (data) => {
      await createNewClient (data)
      history.push("/clients")
    };

    return (
      <div className= "form-container w-50 ms-5">
          <h1 className="text-center bg-primary bg-gradient text-wrap text-white">Create Client</h1>
          <ClientForm onSubmit={onSubmit} />
      </div>
    );
};


export default CreateClient;