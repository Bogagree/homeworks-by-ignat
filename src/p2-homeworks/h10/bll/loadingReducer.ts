type ActionType = LoadingActionType

type LoadingActionType = {
    type: 'SET-LOADING'
    isLoading: boolean
}

type StateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): ActionType => {
    return ({type: 'SET-LOADING', isLoading})
}