import React from 'react'
import Avatar from "./Avatar/Avatar";
import classes from './Partners.module.css'

const Partners = () => {
    return (
        <div className={`${classes.content}`}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
        </div>
    )
}

export default Partners