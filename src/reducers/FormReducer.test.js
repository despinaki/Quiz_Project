import FormReducer from './FormReducer'

describe('post reducer', () => {
    it('should return the initial state', () => {
      expect(FormReducer(undefined, {})).toEqual({
            playerAnswers: [],
            playerNames: [],
            quizQuestions: [],
            quizSettings: ""
        });
    });
})