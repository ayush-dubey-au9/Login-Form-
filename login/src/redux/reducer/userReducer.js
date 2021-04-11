const initialState = {
    isloggedIn: false,
    userData : {

    }

}



const userReducerHelper = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            {
                console.log('action',action)
                return {
                    ...state,
                    isloggedIn: true,
                    userData: action.payload

                }

            }
            
        case "UPDATE_USER":
            return {
                //do som elogic

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