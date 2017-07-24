import React from 'react';
import {mount} from 'enzyme';
import {Messages} from './Messages';

const DATA =
    [
    {
        "id": 0,
        "data": "friend 2 mess1",
        "sender": 0
    },
    {
        "id": 1,
        "data": "friend 2 mess2",
        "sender": 0
    },

        {
            "id": 2,
            "data": "friend 3 mess2",
            "sender": 0
        }
];


describe ('Messages', ()=> {
    it('should render user list name , color must be red if this user id = current id',()=>{
        const messages = mount(<Messages current_ID = {1} current_messages= {DATA} addMessage={() => {}}/>);
        expect(messages.find('.Message').length).toEqual(3);
       expect(messages.find('.Message').at(1).text()).toEqual('SENDER : 0 ( ID : 1 )  --> friend 2 mess2');

    });
});