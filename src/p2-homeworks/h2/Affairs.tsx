import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
    setLastState: () => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (

        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => {props.setFilter('all')} // need to fix
    // const setHigh = () => {props.setFilter('high')}
    // const setMiddle = () => {props.setFilter('middle')}
    // const setLow = () => {props.setFilter('low')}

    const setOnClickHAndler = (e: MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const onAll = style.button + ' ' + (props.filter === 'all' ? style.active : '')
    const onHigh = style.button + ' ' + (props.filter === 'high' ? style.active : '')
    const onMiddle = style.button + ' ' + (props.filter === 'middle' ? style.active : '')
    const onLow = style.button + ' ' + (props.filter === 'low' ? style.active : '')


    return (
        <div>

            {mappedAffairs}

            <button className={onAll} onClick={setOnClickHAndler} value={'all'}>All</button>
            <button className={onHigh} onClick={setOnClickHAndler} value={'high'}>High</button>
            <button className={onMiddle} onClick={setOnClickHAndler} value={'middle'}>Middle</button>
            <button className={onLow} onClick={setOnClickHAndler} value={'low'}>Low</button>

            <button className={style.undo__button} onClick={props.setLastState}>undo</button>

        </div>
    )
}

export default Affairs
