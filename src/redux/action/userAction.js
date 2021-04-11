export const userActionHelper = (registerData) => {
    return {
        type: "CREATE_USER",
        payload: registerData
    }
}

export const loginActionHelper = (loginData) => {
    return {
        type: "LOGIN_USER",
        payload: loginData
    }
}



