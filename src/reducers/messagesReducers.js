import {ADD_MESSAGE,CHANGE_FRIEND} from '../actions/types';


const initialState =
 {
    "ListID" : ["1","2","3"],
     "Current_id" : 2,
    "ListContent" : {
        "1": {
            "id": 1,
            "name": "Friend 1",
            "messages": [
                {
                    "id": 0,
                    "data": " friend 1 mess1",
                    "sender": 0
                },
            ]
        },

        "2": {
            "id": 2,
            "name": "Friend 2",
            "messages": [
                {
                    "id": 0,
                    "data": "friend 2 mess1",
                    "sender": 0
                },
                {
                    "id": 1,
                    "data": "friend 2 mess2",
                    "sender": 2
                },
                {
                    "id": 2,
                    "data": "friend 2 mess3",
                    "sender": 2
                }
            ]
        },

        "3": {
            "id": 3,
            "name": "Friend 3",
            "messages": [
                {
                    "id": 0,
                    "data": "friend 3 mess1",
                    "sender": 0
                },
                {
                    "id": 1,
                    "data": "friend 3 mess2",
                    "sender": 3
                },
                {
                    "id": 2,
                    "data": "friend 3 mess3",
                    "sender": 0
                },
                {
                    "id": 3,
                    "data": "friend 3 mess4",
                    "sender": 0
                },
                {
                    "id": 4,
                    "data": "friend 3 mess5",
                    "sender": 3
                },

            ]
        }

    }

};

export default function messagesReducers(state= initialState , action ) {
    switch (action.type){
        case ADD_MESSAGE:
        {
            const newState ={ ...state};
            const this_messages = newState.ListContent[action.id_friend].messages;
            newState.ListContent[action.id_friend].messages=  this_messages.concat(
                [{
                    "id" : this_messages.length,
                    "data" : action.data,
                    "sender" : 0
                }]
            )

            return newState;
        }

        case CHANGE_FRIEND:
        {
            const newState ={ ...state};
            newState.Current_id = action.id_friend;
            return newState;
        }
        default:
            return state;
    }
}