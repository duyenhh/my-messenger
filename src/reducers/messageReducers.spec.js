import messagesReducers from './messagesReducers';
import* as types from '../actions/types';

const DATA =   {
    "ListID" : ["1","2","3"],
    "Current_id" : 2,
    "ListContent" : {
        1: {
            "id": 1,
            "name": "F1",
            "messages": [
                {
                    "id": 0,
                    "data": "mess1",
                    "sender": 0
                }
            ]
        }
    }
}

describe('messages reducer', ()=>{
    it('should update current id', ()=>{
        expect(messagesReducers(DATA,{})).toEqual(
            {
                "ListID" : ["1","2","3"],
                "Current_id" : 2,
                "ListContent" : {
                    1: {
                        "id": 1,
                        "name": "F1",
                        "messages": [
                            {
                                "id": 0,
                                "data": "mess1",
                                "sender": 0
                            }
                        ]
                    }
                }
            }
        )

        expect(messagesReducers(DATA,
            {
                type: types.CHANGE_FRIEND,
                id_friend : 3
            })).toEqual({
            "ListID" : ["1","2","3"],
            "Current_id" : 3,
            "ListContent" : {
                1: {
                    "id": 1,
                    "name": "F1",
                    "messages": [
                        {
                            "id": 0,
                            "data": "mess1",
                            "sender": 0
                        }
                    ]
                }
            }
        })
    })
});