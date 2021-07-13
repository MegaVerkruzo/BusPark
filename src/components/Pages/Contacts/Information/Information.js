import React from 'react'
import classes from './Information.module.css'
import './../../../../App.css'

const Information = (props) => {
    return (
        <div className={`${classes.content}`}>
            <img src={props.image}/>
            <div className={`${classes.content__text}`}>
                <div className={`text_pred_title`}>
                    {props.title}
                </div>
                <div className={`text_info`}>
                    {props.explain}
                </div>
            </div>
        </div>
    )
}

export default Information