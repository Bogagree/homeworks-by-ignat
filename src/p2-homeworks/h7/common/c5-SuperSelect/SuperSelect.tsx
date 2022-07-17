import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import style from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, className,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const finalSelectStyle = style.select + (className ? ' ' + className : '')

    const mappedOptions: any[] = options ? options?.map((o, i) => <option key={o + '-' + i} className={style.options}
                                                                          value={o}>{o}</option>) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e)
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={finalSelectStyle} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
