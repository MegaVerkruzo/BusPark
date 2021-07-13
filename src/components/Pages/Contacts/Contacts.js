import React from 'react'
import classes from './Contacts.module.css'
import Information from "./Information/Information";
import icon_address from './../../../utils/images/icon_map_contacts.png'
import icon_number from './../../../utils/images/icon_numbers_contacts.png'
import icon_watch from './../../../utils/images/icon_watch_contacts.png'
import icon_phone from './../../../utils/images/icon_phone_contacts.png'

const Contacts = () => {
    return (
        <div className={classes.content}>
            <div className={`${classes.content__block}`}>
                <div className={`text_title ${classes.content__block_title}`}>
                    По всем вопросам <br /> mail@neobus.ru
                </div>
                <div className={`${classes.content__block_text}`}>
                    <div>
                        <Information image={icon_address} title='Адрес' explain='1105 г.Москва ,ул.Народная, д. 11 оф 5 дом 4 переулок 7'/>
                        <Information image={icon_number} title='7 (913) 700 -67-27' explain='с 9:00 до 18:00'/>
                    </div>
                    <div>
                        <Information image={icon_watch} title='График работы' explain='пн-вс (9:00 - 22:00)'/>
                        <Information image={icon_phone} title='7 (913) 700 -67-27' explain='с 9:00 до 18:00'/>
                    </div>
                </div>
                <div className={`button ${classes.content__button}`}>
                    Оставить заявку
                </div>
            </div>
        </div>
    )
}

export default Contacts