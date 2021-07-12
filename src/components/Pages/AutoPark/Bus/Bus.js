import React from 'react'
import classes from './Bus.module.css'
import bus from './../../../../utils/images/bus_park.png'
import './../../../../App.css'

const Bus = () => {
    return (
        <div className={`${classes.content}`}>
            <img className={classes.content__image} src={bus}/>
            <div className={classes.content__title}>
                Микроавтобусы рассчитаные на 23-24 места
            </div>
            <div className={classes.content__cost}>
                <div>Стоимость:</div>
                <div className={classes.content__cost_info}>
                    <div>1 час:  <strong>1200 руб.</strong></div>
                    <div>1 км:   <strong>35 руб.</strong></div>
                </div>
            </div>
            <div className={classes.content__main_button}>
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