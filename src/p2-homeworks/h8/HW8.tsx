import React, {useState} from 'react'
import {homeWorkReducer, SortByAgeAC, SortDownAC, SortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

export type PeopleType = Array<UserType>

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<PeopleType>(initialPeople) // need to fix any

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={style.people}>
            <div className={style.name}>{p.name}</div>
            <div>{p.age} y.o.</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortDownAC()))
    const sortOlder_18 = () => setPeople(homeWorkReducer(initialPeople, SortByAgeAC(18)))

    return (
        <div>
            <hr/>
            <h2>homeworks 8</h2>

            <div className={style.wrapper}>
                {finalPeople}
            </div>

            <div className={style.buttons}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortOlder_18}>check 18</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
