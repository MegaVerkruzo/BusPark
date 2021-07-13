import React from 'react'
import classes from './Footer.module.css'
import avatar from './../../utils/images/avatar.png'
import icon_phone from './../../utils/images/icon_phone.png'
import icon_instagram from './../../utils/images/icon_instagram_footer.png'
import icon_facebook from './../../utils/images/icon_facebook_footer.png'
import icon_vk from './../../utils/images/icon_vk_footer.png'

const Footer = () => {
    return (

        <div className={`${classes.content}`}>
            <div className={`${classes.content__main}`}>
                <div className={`${classes.content__description}`}>
                    <img src={avatar}/>
                    <div className={`${classes.text_info} ${classes.field__text}`}>
                        Информация на сайте ни при каких обстоятельствах не является публичной офертой.
                    </div>
                    <div className={`${classes.text_info}`}>
                         При использовании материалов с данного сайта ссылка на него обязательна !
                    </div>
                </div>
                <div className={`${classes.content__info}`}>
                    <div className={`${classes.content__info_useful}`}>
                        <div className={`${classes.title}`}>
                            Основное
                        </div>
                        <div className={`${classes.text_info}`}>
                            Главная
                        </div>
                        <div className={`${classes.text_info}`}>
                            Новости
                        </div>
                        <div className={`${classes.text_info}`}>
                            Ремонт
                        </div>
                        <div className={`${classes.text_info}`}>
                            О нас
                        </div>
                    </div>
                    <div className={`${classes.content__info_useful}`}>
                        <div className={`${classes.title}`}>
                            Навигация
                        </div>
                        <div className={`${classes.text_info}`}>
                            Контакты
                        </div>
                        <div className={`${classes.text_info}`}>
                            Помощь
                        </div>
                        <div className={`${classes.text_info}`}>
                            Политика
                        </div>
                        <div className={`${classes.text_info}`}>
                            Обратная связь
                        </div>
                    </div>
                    <div className={`${classes.content__info_useful}`}>
                        <div className={`${classes.title}`}>
                            Контакты
                        </div>
                        <div className={`${classes.text_info}`}>
                            г.Москва,улица Генриха <br />
                            Денчинко 18
                        </div>
                        <div className={`${classes.content__info_pictures} ${classes.field}`}>
                            <img className={`${classes.field__images}`} src={icon_phone}/>
                            <strong className={`${classes.text_info}`}>
                                7 (913) 700 -67-27
                            </strong>
                        </div>
                        <div className={`${classes.content__info_pictures} ${classes.field}`}>
                            <img className={`${classes.field__images}`} src={icon_instagram}/>
                            <img className={`${classes.field__images}`} src={icon_facebook}/>
                            <img className={`${classes.field__images}`} src={icon_vk}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes.content__line}`} />
            <div className={`${classes.text_big_info} ${classes.field__text}`}>
                2003 - 2021 Все права защищены
            </div>
            <div className={`${classes.text_big_info}`}>
                Перепечатки и любое использование материалов возможно только при наличии ссылки на первоисходник
            </div>
        </div>
    )
}

export default Footer