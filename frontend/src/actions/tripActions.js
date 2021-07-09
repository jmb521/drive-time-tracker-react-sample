
export const addTrip = (trip) => {
    
    return(dispatch) => {
        
        fetch("http://localhost:3001/trips", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
              trip  
            })
        })
        .then(response => response.json())
        // .then(response => console.log("response in addTrip", response))
        .then(response => dispatch({type: "ADD_TRIP", trip: response}))
    }

}

export const getTrips = () => {
    return dispatch => {
        fetch("http://localhost:3001/trips")
        .then(response => response.json())
        // .then(response => console.log("response in getTrips", response))
        .then(response => dispatch({type: "GET_ALL_TRIPS", trips: response}))
    }
}