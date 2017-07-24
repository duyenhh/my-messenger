import React from 'react';
import {mount} from 'enzyme';
import {FriendList} from './FriendList';

const DATA =
    {
        "ListID" : ["1","2","3"],
        "Current_id" : 2,
        "ListContent" : {
            "1": {
                "id": 1,
                "name": "F1",
                "messages": [
                    {
                        "id": 0,
                        "data": "mess1",
                        "sender": 0
                    }
                ]
            },

            "2": {
                "id": 2,
                "name": "F2",
                "messages": [
                    {
                        "id": 0,
                        "data": "friend 2 mess1",
                        "sender": 0
                    },
                    {
                        "id": 1,
                        "data": "friend 2 mess2",
                        "sender": 0
                    }
                ]
            },

            "3": {
                "id": 3,
                "name": "F3",
                "messages": [
                    {
                        "id": 0,
                        "data": "friend 3 mess1",
                        "sender": 0
                    }
                ]
            }

        }

    };


describe ('FriendList', ()=> {
    it('should render user list name , color must be red if this user id = current id',()=>{
        const friendList = mount(<FriendList data={DATA} changeFriend={() => {}}/>);
        expect(friendList.find('.friend').length).toEqual(3);
    });
});