
 const tripReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TRIP": 
            return [...state, action.trip]; 

        case "GET_ALL_TRIPS": 
            return action.trips
        default: 
            return state;
    }
}
export default tripReducer


