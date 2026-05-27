const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const PORT = process.env.PORT || 5000;
const MESSAGES_PASSWORD = process.env.MESSAGES_PASSWORD || "kr123";

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "portfolio"
});

db.connect((err) => {
    if(err) {
        console.error("DB connection failed", err);
    } else {
        console.log("Connected to MySQL")
    }
});

const app = express(); //creates server

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*"
})); //backend communication
app.use(express.json()); //receiving JSON data

app.get("/", (req,res) => {
    res.send("Server is running"); //route testing
});

app.post("/contact", (req,res) => { //Creates API endpoint
    const {name, email, message} = req.body

    const sql = "INSERT INTO contacts (name, email, message) VALUES (?,?,?)";
    db.query(sql, [name, email, message], (err, result) => {
        
        if(err) {
            console.error(err);
            return res.status(500).json({message:"Database error"});
        }

        res.json({message: "Message successfully received"});

    })
});

app.get("/messages", (req,res) => {

    const password = req.query.password;

    if (password !== MESSAGES_PASSWORD) {
        return res.status(401).json({message: "Unauthorized"});
    }
    
    const sql ="SELECT * FROM contacts ORDER BY id DESC";

    db.query(sql, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({message: "Error fetching data"});
        }

        res.json(result);

    });
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});
