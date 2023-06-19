import React from 'react';
import './Button.scss';
interface ButtonProps {
    text: string
}
export function Button ({text}: ButtonProps) {
    return(
        <div className="button">{text}</div>
    )
}