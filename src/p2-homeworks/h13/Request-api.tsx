import {ChangeEvent, useState} from "react";
import {HW13Api} from "./api/Hw13a-api";
import {SuperCheckbox} from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton";


export const RequestApi = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [serverStatus, setServerStatus] = useState<string>('Do server request')

    const serverRequest = () => {
        HW13Api.testApiMethod(isChecked)
            .then((res) => {
                setServerStatus(res.data.info)
            })
        .catch( erorr => {
                setServerStatus(erorr.response.data.errorText)
        })
    }

    const checkboxStyle = {
        margin: '10px'
    }

    const callbackHW13 = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }

    return (
        <div>
            { serverStatus }
            <br/>
            <br/>
            <div style={{display: 'flex', alignItems: "center"}}>
                <SuperCheckbox
                    style={checkboxStyle}
                    checked={isChecked}
                    onChange={callbackHW13}
                />
                <p>
                    {isChecked ? 'serverStatus: ready for request' : '<= press checkbox for server request'}
                </p>
            </div>

            <SuperButton onClick={serverRequest} children={'api request'}/>
        </div>
    );
};