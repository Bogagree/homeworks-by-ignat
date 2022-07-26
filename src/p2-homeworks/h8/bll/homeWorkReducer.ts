import {PeopleType, UserType} from "../HW8";

export type HomeWorkReducerAT = SortUpAT | SortDownAT | SortByAgeAT;

export type SortUpAT = {
    type: "SORT_UP"
}

export type SortDownAT = {
    type: "SORT_DOWN"
}

export type SortByAgeAT = {
    type: "SORT_BY_AGE"
    age: number
}

export const homeWorkReducer = (state: PeopleType, action: HomeWorkReducerAT): UserType[] => { // need to fix any
    switch (action.type) {
        case "SORT_UP" : {
            return [...state].sort((a,b) => a.name.localeCompare(b.name))
        }
        case "SORT_DOWN": {
            return [...state].sort((a,b) => b.name.localeCompare(a.name))
        }
        case "SORT_BY_AGE": {
            return [...state].filter( user => user.age > action.age)
        }
        default:
            return state
    }
}

export const SortUpAC = (): HomeWorkReducerAT => ({
    type: "SORT_UP"
})

export const SortDownAC = (): HomeWorkReducerAT => ({
    type: "SORT_DOWN"
})

export const SortByAgeAC = (age:number): HomeWorkReducerAT => ({
    type: "SORT_BY_AGE", age
})