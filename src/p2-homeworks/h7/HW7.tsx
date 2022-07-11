import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import styles from './common/c6-SuperRadio/SuperRadio.module.css'

const arr = ['AM', 'FM', 'Dimych FM', "Vanilla JS", "Igor DOP"]

function HW7() {
    const [value, onChangeOption] = useState(arr[1])


    return (
        <div className={styles.hw7}>


            <h2>homeworks 7</h2>

            {/*should work (должно работать)*/}
            <div >
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <div className={styles.buttons}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW7
