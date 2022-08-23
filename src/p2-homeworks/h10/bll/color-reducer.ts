type ActionType = setDarkActionType | setRedActionType | setSomeActionType

type setDarkActionType = {
    type: 'SET-DARK'
    theme: 'dark'
}

type setRedActionType = {
    type: 'SET-RED'
    theme: 'red'
}

type setSomeActionType = {
    type: 'SET-GREEN'
    theme: 'green'
}

type StateType = {
    theme: string
    isDark: boolean
    isRed: boolean
    isSome: boolean
}

const initState = {
    theme: 'green',
    isDark: false,
    isRed: false,
    isSome: true
}

export const colorReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET-DARK': {
            return {
                ...state,
                isSome: false,
                isDark: true,
                isRed: false,
                theme: 'dark'
            }
        }
        case 'SET-RED': {
            return {
                ...state,
                isSome: false,
                isDark: false,
                isRed: true,
                theme: 'red'
            }
        }
        case 'SET-GREEN': {
            return {
                ...state,
                isSome: true,
                isDark: false,
                isRed: false,
                theme: 'green'
            }
        }
        default:
            return state
    }
}

export const setDarkAC = (): ActionType => {
    return ({type: 'SET-DARK', theme: 'dark'})
}
export const setRedAC = (): ActionType => {
    return ({type: 'SET-RED', theme: 'red'})
}
export const setSomeAC = (): ActionType => {
    return ({type: 'SET-GREEN', theme: 'green'})
}