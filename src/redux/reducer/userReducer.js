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
            console.log('action',action)

            return {
                ...state,
                isloggedIn: true,
            }
            }
        case "DELETE_USER":
            return {
                ///dpo some logice

            }
        default:
            return state
    }
    
}

export default userReducerHelper