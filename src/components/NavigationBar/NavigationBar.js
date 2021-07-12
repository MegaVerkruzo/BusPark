import React from 'react'
import {NavLink} from "react-router-dom";
import avatar from './../../utils/images/avatar.png'
import icon_phone from './../../utils/images/icon_phone.png'
import classes from './NavigationBar.module.css'

const NavigationBar = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src={avatar}/>
            </div>
            <NavLink className={classes.content__text} to='/auto_park'>Автобусный парк</NavLink>
            <NavLink className={classes.content__text} to='/advantages'>Приемущества</NavLink>
            <NavLink className={classes.content__text} to='/about_us'>О нас</NavLink>
            <NavLink className={classes.content__text} to='/partners'>Партнеры</NavLink>
            <NavLink className={classes.content__text} to='/contacts'>Контакты</NavLink>
            <div className={classes.content__contact}>
                <div>
                    <img src={icon_phone}/>
                </div>
                <div>
                    + 7 (913)700-67-27
                </div>
            </div>
        </div>
    )
}

export default NavigationBar