import React from 'react'
import classes from './Advantage.module.css'
import icon from './../../../../utils/images/icon_advantages.png'
import './../../../../App.css'

const Advantage = (props) => {
    return (
        <div className={`${classes.content}`}>
            <img className={`${classes.content__icon}`} src={icon}/>
            <div className={`text_pred_title ${classes.content__title}`}>
                {props.title}
            </div>
            <div className={`text_big_info ${classes.content__text}`}>
                {props.explain}
            </div>
        </div>
    )
}

export default Advantage