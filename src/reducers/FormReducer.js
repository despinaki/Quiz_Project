const initState = {
    quizSettings: "",
    playerNames: [],
    quizQuestions: [],
    playerAnswers: []
}

const FormReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_SETTINGS':
            const settings = action.payload
            return {...state, quizSettings: settings}
        case 'ADD_PLAYERS':
            const players = action.payload
            return {...state, playerNames: players}
        case "ADD_QUESTIONS":
            const questions = action.payload
            return {...state, quizQuestions: questions }
        case 'ADD_ANSWER':
            const player = action.payload.player
            const answer = action.payload.answer
            return {...state, playerAnswers: [...state.playerAnswers, {player, answer}]}
        default:
            return state;
    }
}

export default FormReducer;