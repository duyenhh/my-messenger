import { combineReducers } from 'redux';
import messagesReducers from './messagesReducers';
import knowledgeReducers from './knowledgeReducers';

const rootReducer = combineReducers({
    messagesReducers,
    knowledgeReducers,
});

export default rootReducer;
