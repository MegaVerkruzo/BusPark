import React from 'react'
import Advantage from "./Advantage/Advantage";
import classes from './Advantages.module.css'
import './../../../App.css'

const Advantages = () => {
    return (
        <div className={`${classes.content}`}>
            <div className={`text_title ${classes.content__title}`}>Наши преимущества</div>
            <div className={`${classes.content__row_cards}`}>
                <Advantage title='Лицензии на перевозку' explain='Все необходимые официальные разрешения на перевозки пассажиров'/>
                <Advantage title='Опыт работы' explain='Огромный опыт работы и специальная квадификация наших сотрудников'/>
                <Advantage title='Индивидуальный подход' explain='Индивидуальный подход к каждому нашему клиенту'/>
            </div>
            <div className={`${classes.content__row_cards}`}>
                <Advantage title='Современная техника' explain='Современные транспортные средства различной вместительности'/>
                <Advantage title='Страховка клиентов' explain='Современные транспортные средства различной вместительности'/>
                <Advantage title='Низкая стоимость' explain='Современные  транспортные средства различной вместительности '/>
            </div>
        </div>
    )
}

export default Advantages