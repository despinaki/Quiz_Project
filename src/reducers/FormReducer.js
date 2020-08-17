const initState = {
    quizSettings: "",
    quizQuestions: []
}

const FormReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_SETTINGS':
            const settings = action.payload
            return {...state, quizSettings: settings}
        case "ADD_QUESTIONS":
            const questions = action.payload
            return {...state, quizQuestions: questions }
        default:
            return state;
    }
}

export default FormReducer;