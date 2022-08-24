import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com'
})


export type CommonResponseType = {
    errorText: string;
    info: string;
    yourBody: {
        success: boolean
    };
    yourQuery: { };
}

export const HW13Api = {
    testApiMethod (success:boolean) {
        return instance.post<CommonResponseType>('/auth/test', {success})
    }
}