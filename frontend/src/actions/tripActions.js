
export const addTrip = (trip) => {
    console.log("trip", trip)
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
        .then(response => dispatch({type: "ADD_TRIP", trip: {response}}))
    }

}