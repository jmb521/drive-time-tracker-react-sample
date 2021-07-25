export const handleLogin = (googleData) => {
    console.log(googleData)
         return (dispatch) => {
        fetch("http://localhost:3001/auth/request", {
            method: "POST", 
            headers: {
            "content-type": "application/json",
            }, 
            body: JSON.stringify(googleData)
            
        })

        .then(response => response.json())
        .then(response => dispatch({type: "SET_USER", user: response}))
    }


}

export const logoutUser = () => {
    return dispatch => {
        fetch("http://localhost:3001/logout")
        .then(response => response.json())
        .then(dispatch({type: "LOGOUT_USER"}))
    }
}