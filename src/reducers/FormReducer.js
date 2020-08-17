const initState = {
    quizSettings: ""
}
const FormReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_SETTINGS":
            const settings = action.payload
            return {...state, quizSettings: settings }
        default:
            return state;
    }
}
export default FormReducer;