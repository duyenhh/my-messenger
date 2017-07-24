import * as actions from './actions';
import * as types from './types';

describe('actions test', ()=> {
    it('should create action ', () => {
        const id_friend = 1;
        const expectAction = {
            type : types.CHANGE_FRIEND,
            id_friend
        };

        expect(actions.changeFriend(id_friend)).toEqual(expectAction);
    })
});