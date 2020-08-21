// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
import { fetchQuestions } from './Actions'
// import fetchMock from 'fetch-mock'
// const middlewares =[thunk]
// const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
    const mockSettings = {
        players: '2',
        questions: '5',
        difficulty: 'easy',
        category: '21'
    }
    global.fetch = jest.fn(() => Promise.resolve(mockSettings))

    it('returns questions object', async () => {
        const questions = await fetchQuestions(mockSettings);
        expect(typeof questions).toBe('object')
    })
})

