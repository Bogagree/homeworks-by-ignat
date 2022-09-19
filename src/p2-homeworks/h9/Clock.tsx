import React, {useState} from 'react'
import style from './Clock.module.css'
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        // const id: number = window.setInterval(() => {
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }
    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() || <br/>// tag br if date underfined
    const stringDate = date.toLocaleDateString() || <br/>// tag br if date underfined

    return (
        <div className={style.wrapper}>

            <div className={style.clock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show
                ? (<div className={style.date}>
                    {stringDate}
                </div>)
                : <div className={style.date}>
                </div>
            }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
