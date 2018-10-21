import reducer from './index';
import { REQUEST_HISTORY, RECEIVE_HISTORY } from '../actions/index';

describe('root reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            history: {
                isFetching: false,
                items: []    
            }
        });
    });

    it('should request history', () => {
        expect(reducer({
            history: {
                isFetching: false,
                items: []    
            }            
        }, {
            type: REQUEST_HISTORY
        })).toEqual({
            history: {
                isFetching: true,
                items: []    
            }
        });
    });

    it('should receive history', () => {
        const items = [
            {
                "score": 4583,
                "date": 1538410833
            },
            {
                "score": 2300,
                "date": 1538410833
            },
        ];
        expect(reducer({
            history: {
                isFetching: true,
                items: []    
            }
        }, {
            type: RECEIVE_HISTORY,
            items
        })).toEqual({
            history: {
                isFetching: false,
                items   
            }
        });
    });
});