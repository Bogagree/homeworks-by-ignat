import React from "react";
import s from "./HW12.module.css";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {setDarkAC, setRedAC, setSomeAC} from "../h10/bll/color-reducer";
import {AppStoreType} from "../h10/bll/store";

// const themes = ['dark', 'red', 'some'];

function HW12() {

    const dispatch = useDispatch()

    let theme = useSelector<AppStoreType, string>(state => state.color.theme)
    let isDark = useSelector<AppStoreType, boolean>(state => state.color.isDark)
    let isRed = useSelector<AppStoreType, boolean>(state => state.color.isRed)
    let isSome = useSelector<AppStoreType, boolean>(state => state.color.isSome)


    const darkCallback = () => {
        dispatch(setDarkAC())
    }
    const redCallback = () => {
        dispatch(setRedAC())
    }
    const someCallback = () => {
        dispatch(setSomeAC())
    }


    return (
        <div className={s[theme]}>
            <hr/>

            <span className={s[theme + '-text']}>
                homeworks 12

                <div className={s.checkboxes}>
                    <SuperCheckbox checked={isSome} onChange={someCallback} children={'green'} className={s.checkbox}/>
                    <SuperCheckbox checked={isDark} onChange={darkCallback} children={'dark'} className={s.checkbox}/>
                    <SuperCheckbox checked={isRed} onChange={redCallback} children={'red'} className={s.checkbox}/>
                </div>


            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
