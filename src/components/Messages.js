import React from "react";

function Messages({messages}){
    return(
        <div className="msgs">
            <h2>Messages</h2>
            {messages.map((message, index) => (
                    <li key={index}>
                        <strong>From: {message.sender1 || message.sender2}</strong>
                        <br />
                        <p>{message.message1 || message.message2}</p>
                    </li>
                ))}
        </div>
    );
}

export default Messages;