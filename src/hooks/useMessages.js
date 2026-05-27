import { useEffect, useState } from "react";

function useMessages () {
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        fetch(fetch("https://react-portfolio-f4ed.onrender.com/messages?password=kr123")) 
            .then(res => res.json())
            .then(data => setMessages(data))    //stores data to display in UI
            .catch(err => console.error(err));
    }, []);
    
    return messages;
}

export default useMessages;

//CUSTOM HOOKS
