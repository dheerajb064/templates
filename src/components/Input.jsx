import React from 'react'
import "./input.css"

export default function Input({ field }) {
    return (
        <div className="inputContainer">
            <div className="inputTitle">{field.name}</div>
            <div className="inputValue">{field.value}</div>
        </div>
    )
}
