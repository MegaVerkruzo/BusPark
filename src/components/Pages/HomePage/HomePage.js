import React from 'react'
import classes from './HomePage.module.css'
import NavigationBar from "../../NavigationBar/NavigationBar";

const HomePage = () => {
    return (
        <div className={classes.content}>
            <NavigationBar />
            HomePage
        </div>
    )
}

export default HomePage