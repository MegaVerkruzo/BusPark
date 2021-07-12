import React from 'react'
import classes from './HomePage.module.css'
import NavigationBar from "../NavigationBar/NavigationBar";
import bus from './../../utils/images/bus_homepage.png'
import './../../App.css'

const HomePage = () => {
    return (
        <div className={classes.content}>
            <NavigationBar />
            <div className={classes.content__main}>
                <img src={bus}/>
                <div>
                    <div className={`text text_title`}>
                        Комфортно и безопасно
                        по межгороду
                    </div>
                    <div className={`text text_info`}>
                        Мы осуществляем комфортабельные автобусные перевозки на заказ.В Вашем распоряжении целый парк современных автобусов и микроавтобусов в Новосибирске.
                    </div>
                    <div> {/*Кнопка*/}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage