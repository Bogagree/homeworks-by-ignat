type ActionType = ColorActionType

type ColorActionType = {
    type: 'SET-DARK' | 'SET-RED'
}

type StateType = {
    isDark: boolean
    isRed: boolean
}

const initState = {
    isDark: false,
    isRed: false
}

export const colorReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET-DARK': {
            return {
                ...state,
                isDark: !state.isDark
            }
        }
        case 'SET-RED': {
            return {
                ...state,
                isRed: !state.isRed
            }
        }
        default:
            return state
    }
}

export const setDarkAC = (): ActionType => {
    return ({type: 'SET-DARK'})
}
export const setRedAC = (): ActionType => {
    return ({type: 'SET-RED'})
}