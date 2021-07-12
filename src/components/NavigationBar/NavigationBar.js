import React from 'react'
import {NavLink} from "react-router-dom";


const NavigationBar = () => {
    return (
        <div>
            <div>
            {/*    Логотип*/}
            </div>
            <div>
            {/*    NavBar*/}
                <NavLink to='/auto_park'>Автобусный парк</NavLink>
                <NavLink to='/advantages'>Приемущества</NavLink>
                <NavLink to='/about_us'>О нас</NavLink>
                <NavLink to='/partners'>Партнеры</NavLink>
                <NavLink to='/contacts'>Контакты</NavLink>
            </div>
            <div>
            {/*    Номер телефона*/}
                <div>
                    <img src={}/>
                </div>
                <div>
                    + 7 (913)700-67-27
                </div>
            </div>
        </div>
    )
}

export default NavigationBar