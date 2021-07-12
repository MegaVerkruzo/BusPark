import React from 'react'
import classes from './Bus.module.css'
import bus from './../../../../utils/images/bus_park.png'
import './../../../../App.css'

const Bus = () => {
    return (
        <div className={`${classes.content}`}>
            <img src={bus}/>
            <div>
                Микроавтобусы рассчитаные на 23-24 места
            </div>
            <div>
                <div>Стоимость:</div>
                <div>
                    <div>1 час:  1200 руб.</div>
                    <div>1 км:   35 руб.</div>
                </div>
            </div>
            <div >
                <div className={`button ${classes.content__buttons}`}>
                    Рассчитать
                </div>
                <div className={`button ${classes.content__buttons}`}>
                    Уточнить цену
                </div>
            </div>
        </div>
    )
}

export default Bus