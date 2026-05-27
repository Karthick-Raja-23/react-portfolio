import { useState } from "react" //React tool to store data
import {TextField, Button, Box} from "@mui/material"
import { API_BASE_URL } from "./config"

function Contact () {

    const [formData, setFormData] = useState({  //[currentdata, function to update it]
        name:"",
        email:"",
        message:""
    })

    const handleChange = (e) => { //e - event object -- something happens (like typing, clicking): React gives you information about that action, That information is stored in e
        setFormData({
            ...formData, //...formData - copies old data
            [e.target.name]: e.target.value //e.target -The input field
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!API_BASE_URL) {
            alert("Contact form is not connected yet. Add VITE_API_BASE_URL in your hosting environment.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData) //JS object → JSON format
            });

            const data =await response.json();

            alert(data.message);

            setFormData({
                name:"",
                email:"",
                message:""
            });
        } catch (error){
            console.error(error);
            alert("Something went wrong");
        }
    };

    const inputStyle= {
        input: {color: "white"},
        textarea: {color: "white"},
        label: {color: "#aaa"},
        "& .MuiOutlinedInput-root": {
            "& fieldset": {borderColor: "#333"},
            "&:hover fieldset": {borderColor: "#00bcd4"},
            "&.Mui-focused fieldset": {borderColor: "00bcd4"}
        }
    }

    return (
        <section className="contact" id="contact">

            <h2>Contact Me</h2>

            <div className="con-container">

                <Box 
                    component="form" 
                    onSubmit={handleSubmit}
                    sx={{
                        width: "50%",
                        mx: "auto",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >

                    <TextField 
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"  
                        variant="outlined"  
                        sx={inputStyle}
                    />

                    <TextField
                        label="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"  
                        sx={inputStyle}
                    />

                    <TextField
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={5}
                        margin="normal"
                        variant="outlined"  
                        sx={inputStyle}
                    />
                    
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 3,
                            backgroundColor: "#00bcd4",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: "#00acc1",
                                color: "#0f0f0f",
                                transform: "scale(1.05)"
                            }
                        }}
                    >
                        Send Message
                    </Button>

                </Box>

            </div>

        </section>
    )
}

export default Contact
