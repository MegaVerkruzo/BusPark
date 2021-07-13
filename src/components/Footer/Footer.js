import React from 'react'
import classes from './Footer.module.css'
import avatar from './../../utils/images/avatar.png'

const Footer = () => {
    return (
        <div className={`${classes.content}`}>
            <div className={`${classes.content__description}`}>
                <img src={avatar}/>
                <div>
                    Информация на сайте ни при каких обстоятельствах не является публичной офертой.
                </div>
                <div>
                    При использовании материалов с данного сайта ссылка на него обязательна !
                </div>
            </div>
            <div className={`${classes.content__info}`}>
                <div className={`${classes.content__info_useful}`}>
                    <div>

                    </div>
                </div>
                <div className={`${classes.content__info_useful}`}>

                </div>
                <div className={`${classes.content__info_useful}`}>

                </div>
            </div>
        </div>
    )
}

export default Footer