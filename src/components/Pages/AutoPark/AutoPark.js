import React from 'react'
import Bus from "./Bus/Bus";
import classes from './AutoPark.module.css'
import './../../../App.css'

const AutoPark = () => {
    return (
        <div>
            <div className={`text_title ${classes.content__title}`}>Наш автопарк</div>
            <div className={`text_info ${classes.content__info}`}>Вы легко можете орендовать для себя транспорт городского типаразличной вместимости ,туристические транспортные средства ,а также первоклассные автобусы представительского  класса,которые оборудованы видеотехникой ,кондиционерами,микрофонами,туалетами,кофеварками и удобными креслами для сидения</div>
            <div className={`${classes.content__row_card}`}>
                <Bus />
                <Bus />
                <Bus />
            </div>
            <div className={`${classes.content__row_card}`}>
                <Bus />
                <Bus />
                <Bus />
            </div>
        </div>
    )
}

export default AutoPark