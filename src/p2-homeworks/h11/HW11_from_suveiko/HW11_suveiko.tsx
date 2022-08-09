import React, {ChangeEvent, useState} from 'react'
import SuperRange from "./c7_SuperRange/suveiko_SuperRange";
import SuperDoubleRange from "./c8_SuperRange/suveiko_SuperDoubleRange";

export function HW11_suveiko() {

    const [minValue, setMinValue] = useState(0)
    const maxValue = 100

    const [value1, setValue1] = useState(minValue)
    const [value2, setValue2] = useState(maxValue)


    const onChangeRange = ([value1, value2]: [number, number]) => {
        setValue1(value1)
        setValue2(value2)
    }

    function handlerMinValue(e: ChangeEvent<HTMLInputElement>) {
        let mV = +e.currentTarget.value
        if (mV > 100) {
            mV = 100
        }
        setMinValue(mV)
        setValue1(mV)
    }

    return (
        <div>
            <hr/>
            <h2>homeworks 11 from @suveiko:</h2>

            <input type="number" value={minValue} onChange={handlerMinValue} style={{
                display: 'inline-block',
                width: '40px',
            }}/>

            <div>
                <div style={{
                    display: 'inline-block',
                    width: '25px',
                    textAlign: 'center'
                }}>
                    {value1}
                </div>
                <div style={{
                    display: 'inline-block',
                    width: '250px'
                }}>
                    <SuperRange
                        onChangeRange={setValue1}
                        onChangeRange2={setValue2}
                        value1={value1}
                        value2={value2}
                    />
                </div>
            </div>

            <div>
                <div style={{
                    display: 'inline-block',
                    width: '25px',
                    textAlign: 'center'
                }}>
                    {value1}
                </div>
                <div style={{
                    display: 'inline-block',
                    width: '250px'
                }}
                >
                    <SuperDoubleRange
                        onChangeRange={onChangeRange}
                        value={[value1, value2]}
                    />
                </div>
                <div style={{
                    display: 'inline-block',
                    width: '25px',
                    textAlign: 'center',
                    padding: '5px'
                }}>
                    {value2}
                </div>
            </div>

        </div>
    )
}