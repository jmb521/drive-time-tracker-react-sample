
 const tripReducer = (state = [], action) => {

    switch(action.type) {
        case "ADD_TRIP": 
            return [...state, action.trip]; 
        default: 
            return state;
    }
}
export default tripReducer


