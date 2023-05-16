
import React from 'react';
import { useState } from 'react';
import './Message.css';

const Message = () => {
    return(
        <div className="message-container">
            <p>
                Up to $7500 tax credit available for Model Y and Model 3. 
                <span><a href="/">Learn More</a></span>
            </p>
        </div>
    )
}

export default Message;