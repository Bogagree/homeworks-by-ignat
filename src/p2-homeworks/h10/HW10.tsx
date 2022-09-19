import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import style from './HW10.module.css'
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const dispatch = useDispatch()

    const setLoading = () => {
        console.log('loading...')
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
            console.log('stop loading...')
        }, 5000)
    };

    return (
        <div className={style.hw10}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={style.container}>
                        <div className={style.loading}>
                            <p>l</p>
                            <p>o</p>
                            <p>a</p>
                            <p>d</p>
                            <p>i</p>
                            <p>n</p>
                            <p>g</p>
                        </div>
                    </div>
                ) : (
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                )
            }
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
