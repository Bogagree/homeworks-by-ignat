type ActionsType = ReturnType<typeof setThemeAC>
export type ThemeType = 'dark' | 'red' | 'green'

type StateType = {
    theme: ThemeType
}

const initState: StateType = {
    theme: 'dark',
}

export const colorReducer = (state = initState, action: ActionsType): StateType => {
    switch (action.type) {
        //кейс, который меняет свойство темы на пришедшее в объекте экшн
        case "CHANGE-THEME":
            return {
                ...state,
            theme: action.payload.theme
            }
        default:
            return state
    }
}

export const setThemeAC = (theme: ThemeType) => ({
    type: "CHANGE-THEME", payload: {theme}
} as const) //принимает тему и возвращает объект action с типом и темой которая приходит в параметрах

