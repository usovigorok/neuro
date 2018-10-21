import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { 
    REQUEST_HISTORY, 
    requestHistory, 
    RECEIVE_HISTORY,
    receiveHistory,
    fetchHistoryItems
} from './index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to request history', () => {
    const expectedAction = {
        type: REQUEST_HISTORY
    }
    expect(requestHistory()).toEqual(expectedAction)
  })

  it('should create an action to receive history', () => {
    const json = {
        "history": [
            {
                "score": 4583,
                "date": 1538410833
            }
        ]
    };
    const expectedAction = {
        type: RECEIVE_HISTORY,
        items: json
    }
    expect(receiveHistory(json)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
    it('creates RECEIVE_HISTORY when fetching history has been done', () => {
        const items = {
            "history": [
                {
                    "score": 4583,
                    "date": 1538410833
                },
                {
                    "score": 2300,
                    "date": 1538410833
                }
            ]
        };
        fetchMock
            .getOnce('http://localhost:3030/history', items)
        const expectedActions = [
            { type: REQUEST_HISTORY },
            { type: RECEIVE_HISTORY, items }
        ]
        const store = mockStore({ items: [] })
        return store.dispatch(fetchHistoryItems()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })