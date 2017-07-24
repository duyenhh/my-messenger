import React from 'react';
import {mount} from 'enzyme';
import {Friend} from './Friend';


describe ('Friend', ()=> {
    it('should render user list name , color must be red if this user id = current id',()=>{
        const friend = mount(<Friend id = {1} isCurrent={1} changeFriendNow={() => {}}/>);
        expect(friend.find('.friend').text()).toEqual('1 friend');
    });
});