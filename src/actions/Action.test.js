import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './Actions'
import fetchMock from 'fetch-mock'

const middlewares =[thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates ADD_QUESTIONS when fetching questions has been done', () => {
        fetchMock.getOnce('https://opentdb.com/api.php?amount=10')
    })
})