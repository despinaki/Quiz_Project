const addSettings = quizSettings => ({
    type: 'ADD_SETTINGS',
    payload: quizSettings
})

const addQuestions = quizQuestions => ({
    type: 'ADD_QUESTIONS',
    payload: quizQuestions
})

export const addPlayers = playerNames => ({
    type: 'ADD_PLAYERS',
    payload: playerNames
})

export const getQuestions = quizSettings => {
    return async dispatch => {
        try {
            dispatch(addSettings(quizSettings))
            const data = await fetchQuestions(quizSettings)
            dispatch(addQuestions(data))
        } catch (err) {
            console.warn(err.message)
        }
    }
}

const fetchQuestions = async quizSettings => {
    try {
        const resp = await fetch(`https://opentdb.com/api.php?amount=${quizSettings.questions}&category=${quizSettings.category}&difficulty=${quizSettings.difficulty}&type=multiple`)
        const data = await resp.json()
        return data
    } catch (err) {
        throw new Error(err.message)
    }
}