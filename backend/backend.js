require("dotenv").config()
const mongoose = require("mongoose")
const Contact = require("./models/contact")

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const MESSAGES_PASSWORD = process.env.MESSAGES_PASSWORD || "kr123";

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

const app = express(); //creates server

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*"
})); //backend communication
app.use(express.json()); //receiving JSON data

app.get("/", (req,res) => {
    res.send("Server is running"); //route testing
});

app.post("/contact", async (req,res) => { //Creates API endpoint

    try {

        const {name, email, message} = req.body

        const newMessage = new Contact({
            name, email, message
        });

        await newMessage.save();

        res.json({message: "Message successfully received"});

    } catch (err) {

        console.error(err);
        return res.status(500).json({message:"Database error"});

    }
});

app.get("/messages", async (req,res) => {

    const password = req.query.password;

    if (password !== MESSAGES_PASSWORD) {
        return res.status(401).json({message: "Unauthorized"});
    }
    
    try {

        const messages = await Contact.find().sort({ createAt: -1 });
        res.json(messages);

    } catch (err) {

        console.error(err);
        return res.status(500).json({message: "Error fetching data"});

    }
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});
