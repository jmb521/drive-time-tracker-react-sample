
const driverReducer = (state = {drivers: [], loading: false}, action) => {
    switch(action.type) {
        case 'ADD_DRIVER': 
            return {...state, drivers: [...state.drivers, action.driver]}; 
        case 'LOADING_DRIVERS': 
            return {...state, loading: true}
        case 'GET_ALL_DRIVERS':
            return {...state, drivers: action.drivers, loading: false}
        default: 
            return state;
    }
}

export default driverReducer