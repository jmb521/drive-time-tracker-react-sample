// {type: "ADD_DRIVER", driver: driver}

export const addDriver = driver => {


    return (dispatch) => {
        fetch("http://localhost:3001/drivers", {
            method: "POST", 
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({
                driver
            })
        })
        .then(response => response.json())
        .then(response => dispatch({type: "ADD_DRIVER", driver: response}))
    }

}


export const getAllDrivers  = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_DRIVERS", loading: true})
        fetch("http://localhost:3001/drivers")
        .then(response => response.json())
        .then(response => dispatch({type: "GET_ALL_DRIVERS", drivers: response}))
    }
}

