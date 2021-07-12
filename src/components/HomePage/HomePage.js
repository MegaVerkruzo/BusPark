import React from 'react'
import classes from './HomePage.module.css'
import NavigationBar from "../NavigationBar/NavigationBar";
import bus from './../../utils/images/bus_homepage.png'
import './../../App.css'

const HomePage = () => {
    return (
        <div className={classes.content}>
            <NavigationBar />
            <div>
                <img className={classes.content__main_image} src={bus}/>
                <div className={classes.content__main}>
                    <div className={`${classes.content__main_text_title}`}>
                        Комфортно и безопасно
                        по межгороду
                    </div>
                    <div className={`${classes.content__main_text_info}`}>
                        Мы осуществляем комфортабельные автобусные перевозки на заказ.В Вашем распоряжении целый парк современных автобусов и микроавтобусов в Новосибирске.
                    </div>
                    <div className={classes.content__main_button}> {/*Кнопка*/}
                        Рассчитать маршрут
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage