import React from "react";
import s from "./HW12.module.css";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {setDarkAC, setRedAC} from "../h10/bll/color-reducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const dispatch = useDispatch()
    const dark = useSelector<AppStoreType, boolean>(state => state.color.isDark)
    const red = useSelector<AppStoreType, boolean>(state => state.color.isRed)

    const darkCallback = () => {
        dispatch(setDarkAC())
    }
    const redCallback = () => {
        dispatch(setRedAC())
    }

    const theme = dark ? 'dark' : 'some'
    const theme2 = red ? 'red' : 'some'; // useSelector

    return (
        <div className={s[theme] || s[theme2] }>
            <hr/>

            <span className={s[theme + '-text']}>
                homeworks 12

                <div>
                    <SuperCheckbox onChange={darkCallback}/><span>dark</span>
                    <SuperCheckbox onChange={redCallback}/><span>red</span>
                </div>


            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
