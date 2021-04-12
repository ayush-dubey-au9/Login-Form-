const initialState = {
    isloggedIn: false,
    userData : {

    }

}



const userReducerHelper = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            {
                return {
                    ...state,
                    userData: action.payload

                }

            }
            
        case "LOGIN_USER":
            {

            return {
                ...state,
                isloggedIn: true,
            }
            }
        case "UPDATE_USER":
            {
            return {
                ...state,
                    userData: action.payload


            }
        }
        default:
            return state
    }
    
}

export default userReducerHelper