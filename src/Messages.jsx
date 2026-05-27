import useMessages from "./hooks/useMessages";

function Messages() {

    const messages = useMessages();
    
    return (

        <div style={{padding: "50px"}}>

            <h2>Messages</h2>

            {messages.map((msg) => (
                <div key={msg.id} style={{
                    background: "#1a1a1a",
                    padding: "20px",
                    marginBottom: "20px",
                    borderRadius: "10px"
                }}>
                    
                    <h3>{msg.name}</h3>
                    <p>{msg.email}</p>
                    <p>{msg.message}</p>
                    
                </div>
            ))}
            
        </div>
    );
}

export default Messages;
