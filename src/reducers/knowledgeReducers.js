import {CHANGE_STATE_QUESTION, DELETE_QUESTION,DELETE_SECTION,ADD_SECTION,EDIT_QUESTION} from '../actions/types';


const initialState =
    [
        {
            "sectionId": 0,
            "sectionName": "SECTION1",
            "sectionContent": [
                {
                    "quesId": 0,
                    "quesData": "what the ... ",
                    "answer" : "????",
                    "quesState": "Disable"
                },
                {
                    "quesId": 1,
                    "quesData": "what the ... ",
                    "quesState": "Enable",
                    "answer" : "????",
                },

            ]
        },
        {
            "sectionId": 1,
            "sectionName": "SECTION2",
            "sectionContent": [
                {
                    "quesId": 0,
                    "quesData": "what the .................................. ",
                    "quesState": "Enable",
                    "answer" : "????",
                },
                {
                    "quesId": 1,
                    "quesData": "what the ... ",
                    "quesState": "Enable",
                    "answer" : "????",
                },
                {
                    "quesId": 2,
                    "quesData": "what the ... ",
                    "quesState": "Enable",
                    "answer" : "????",
                },
                {
                    "quesId": 3,
                    "quesData": "what the hell... ",
                    "quesState": "Enable",
                    "answer" : "????",
                },

            ]
        },
    ];


export default function knowledgeReducers(state = initialState, action) {
    switch (action.type) {
        case  CHANGE_STATE_QUESTION : {
            const newState = state.slice();
            const curentState = (((newState[action.id_section]).sectionContent)[action.id_question]).quesState;

            if (curentState == "Enable") {

                (((newState[action.id_section]).sectionContent)[action.id_question]).quesState = "Disable";

            }
            else {

                (((newState[action.id_section]).sectionContent)[action.id_question]).quesState = "Enable";

            }

            return newState;
        }

        case DELETE_QUESTION : {
            const newState = state.slice();
            const currentQuesArray = ((newState[action.id_section]).sectionContent);
            (newState[action.id_section]).sectionContent = currentQuesArray.filter((question) => question.quesId !== action.id_question);
            return newState;
        }

        case DELETE_SECTION : {
            return state.filter((section)=> section.sectionId !== action.id_section);
        }

        case ADD_SECTION : {

            const lastId = (state.length!= 0 ) ? state[state.length-1].sectionId : 0;
            const newState = state.concat(
                [{
                    "sectionId": lastId+1,
                    "sectionName": action.newSection,
                    "sectionContent": []
                }]
            );
            return newState;
        }

        case EDIT_QUESTION :{
            const newState = state.slice();
            const currentQuestions = (newState[action.id_section]).sectionContent;
            (newState[action.id_section]).sectionContent = currentQuestions.map((each)=>(
                (each.quesId==action.id_question) ? {
                        "quesId": action.id_question,
                        "quesData" : action.newData.question,
                        "quesState": each.quesState,
                        "answer" : action.newData.answer,
                    } : each

            ));
        }
        default:
            return state;
    }
}