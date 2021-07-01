
const driverReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_DRIVER': 
            return [...state, action.driver]; 
        default: 
            return state;
    }
}

export default driverReducer