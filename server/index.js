    import express from "express";
    import bodyParser from "body-parser";
    import mongoose from "mongoose";
    import router from "./routes/clients.js";
    import cors from "cors";
    import dotenv from 'dotenv';

    dotenv.config();

    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));

    app.use(cors());

    app.use(express.json());;

    app.use("/", router);


    const PORT = process.env.PORT || 5000;

    mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));