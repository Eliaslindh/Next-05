import React, { ReactNode } from 'react'
import style from '../komponenter/button.module.css'



const buttonPlus = () => {
    return (
        <div>
            <button className={style.buttons}>Plus</button>
            <button className={style.buttons}>Minus</button>
            <button className={style.buttons}>reset</button>
        </div>
    )
}

export default buttonPlus