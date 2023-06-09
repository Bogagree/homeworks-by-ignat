import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import {restoreState, saveState} from './localStorage/localStorage'
import {SuperButton} from "../h4/common/c2-SuperButton/SuperButton";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }

    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }

    const clearStorage = () => {
        localStorage.clear();
    }

    return (
        <div>
            <hr/>
            homeworks 6

            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
            <SuperButton onClick={clearStorage}>clear storage</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
