import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <>
            <div className={s.affair}>
                <div className={ `${s.affair__element} ${s.affair__element_name}`}>{props.affair.name}</div>
                <div className={`${s.affair__element} ${s.affair__element_priority}`}>{props.affair.priority}</div>
                <button onClick={deleteCallback} className={s.filter_button}>X</button>
            </div>
        </>
    )
}
export default Affair