import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setThemeAC, ThemeType} from "../h10/bll/color-reducer";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";


const themes: ThemeType[] = ['dark', 'red', 'green'];

function HW12() {

    const dispatch = useDispatch()


    let theme = useSelector<AppStoreType, ThemeType>(state => state.color.theme)

    const changeTheme = (value: ThemeType) => {
        dispatch(setThemeAC(value))
    } //принимает ивент и диспатчит текущее значение в setThemeAC


    return (
        <div className={s[theme]}>
            <hr/>

            <span className={s[theme + '-text']}>
                homeworks 12

                <div className={s.select}>
                    <SuperSelect options={themes}
                                 value={theme}
                                 onChangeOption={changeTheme}
                    />
                </div>

                <SuperRadio name={'HW12'}
                            options={themes}
                            value={theme}
                            onChangeOption={changeTheme}
                />
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
