import* as types from './types';

export function addMessage(id_friend,data) {
    return {
        type : types.ADD_MESSAGE,
        id_friend,
        data
    }
}


export function changeFriend(id_friend) {
    return{
        type : types.CHANGE_FRIEND,
        id_friend

    }
}

export  function  changeStateQuestion(id_section,id_question) {
    return{
        type : types.CHANGE_STATE_QUESTION,
        id_question,
        id_section
    }
}

export function deleteQuestion(id_section,id_question){
    return{
        type : types.DELETE_QUESTION,
        id_question,
        id_section
    }
}

export function  deleteSection(id_section) {
    return{
        type : types.DELETE_SECTION,
        id_section
    }
}
export  function  addSection(newSection) {
    return{
        type : types.ADD_SECTION,
        newSection
    }
}

export  function  addQuestion(id_section,newData) {
    return{
        type : types.ADD_QUESTION,
        id_section,
        newData

    }
}

export  function  editQuestion(id_section,id_question,newData) {
    return{
        type : types.EDIT_QUESTION,
        id_section,
        id_question,
        newData
    }
}