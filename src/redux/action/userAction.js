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

export const userUpdateHelper = (updateData) => {
    return {
        type: "UPDATE_USER",
        payload: updateData
    }
}



