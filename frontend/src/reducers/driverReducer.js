
export default function driverReducer(state = {drivers: [], users: []}, action) {
    switch (action.type) {
       case "ADD_DRIVER":
           return {...state, drivers: [...state.drivers, action.driver]}
           
       default:
           return state;
   }
}