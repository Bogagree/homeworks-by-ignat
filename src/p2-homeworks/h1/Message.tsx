import React from 'react'
import './Message_module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

export const Message = (props: MessagePropsType) => {
    return (
        <span className="container">
            <img className="avatar" src={props.avatar} alt="avatar"/>
            <div className="message__wrapper">
            <h3 className="title">{props.name}</h3>
                <div className="message__text"> {props.message} </div>
            <div className="time-stamp">{props.time}</div>
            </div>
        </span>
    )
}

export default Message
