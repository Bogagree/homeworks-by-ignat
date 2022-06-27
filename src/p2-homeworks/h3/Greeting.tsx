import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyDownTaskAddTask: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownTaskAddTask} // деструктуризация пропсов
) => {

    const inputClass = error ? style.error_input : '' // need to fix with (?:)


    return (
        <div className={style.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyDown={onKeyDownTaskAddTask}
                    className={inputClass}
                    onBlur={setNameCallback}
                />
                <div className={`${style.error_height} ${style.error_message}`}>{error}</div>

            </div>

            <div className={style.error_counter}>Users: {totalUsers}</div>
            <button className={style.error_button} onClick={addUser} disabled={!name}>add</button>

        </div>
    )
}

export default Greeting
