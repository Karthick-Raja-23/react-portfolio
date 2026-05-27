import { useEffect, useState } from "react";
import { API_BASE_URL, MESSAGES_PASSWORD } from "../config";

function useMessages () {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!API_BASE_URL || !MESSAGES_PASSWORD) {
            return;
        }

        fetch(`${API_BASE_URL}/messages?password=${encodeURIComponent(MESSAGES_PASSWORD)}`) 
            .then(res => res.json())
            .then(data => setMessages(data))    //stores data to display in UI
            .catch(err => console.error(err));
    }, []);
    
    return messages;
}

export default useMessages;

//CUSTOM HOOKS
