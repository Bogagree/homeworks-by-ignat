import React, {useState} from 'react'
import style from './HW11.module.css'
import {Box, Slider} from "@mui/material";


function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(100)
    // const [value, setValue] = useState<number[]>([value1, value2]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue1(newValue as number)
        setValue2(100)
    }

    const handleChange2 = (event: Event, newValue: number | number[]) => {
        let nV = [...newValue as number[]]
        setValue1(nV[0])
        setValue2(nV[1])
    }

    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <Box width={250} >
                <div className={style.box}>
                <div className={style.valuetextLeft}>{value1}</div>
                <Slider defaultValue={value1}
                        aria-label="Always visible"
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                />
                <div className={style.valuetextRight}>{value2}</div>
                </div>


                <div className={style.box}>
                    <div className={style.valuetextLeft}>{value1}</div>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={[value1, value2]}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    <div className={style.valuetextRight}>{value2}</div>
                </div>

            </Box>

            {/*<div>*/}
            {/*    <span>{value1}</span>*/}
            {/*    <SuperRange onChangeRange={onChangeRange} value={value1}/>*/}
            {/*    <span>{value2}</span>*/}

            {/*</div>*/}

            {/*<div>*/}
            {/*    <span>{value1}</span>*/}
            {/*    <SuperDoubleRange*/}
            {/*        // сделать так чтоб value1 и value2 изменялось*/}
            {/*    />*/}
            {/*    <span>{value2}</span>*/}
            {/*</div>*/}

            <hr/>
            {/*<h2>Alternative slider</h2>*/}
            {/*<Slider/>*/}

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
