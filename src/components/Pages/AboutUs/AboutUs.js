import React from 'react'
import classes from './AboutUs.module.css'
import bus from './../../../utils/images/bus_park.png'
import './../../../App.css'

const AboutUs = () => {
    return (
        <div className={`${classes.content}`}>
            <img className={`${classes.content__image}`} src={bus}/>
            <div className={`${classes.content__text}`}>
                <div className={`text_title ${classes.content__text_element}`}>
                    Кто мы?
                </div>
                <div className={`text_info ${classes.content__text_element}`}>
                    В своём стремлении повысить качество жизни, они забывают, что высокое качество позиционных
                    исследований предоставляет широкие возможности для соответствующих условий активизации. Банальные,
                    но неопровержимые выводы, а также диаграммы связей лишь добавляют фракционных разногласий и смешаны
                    с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус
                    бесполезности
                </div>
                <div className={`text_info ${classes.content__text_element}`}>
                    В своём стремлении повысить качество жизни, они забывают, что высокое качество позиционных
                    исследований предоставляет широкие возможности для соответствующих условий активизации. Банальные,
                    но неопровержимые выводы, а также диаграммы связей лишь добавляют фракционных разногласий и смешаны
                    с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус
                    бесполезности
                </div>
                <div className={`button ${classes.content__button}`}>
                     Рассчитать
                </div>
            </div>
        </div>
    )
}

export default AboutUs