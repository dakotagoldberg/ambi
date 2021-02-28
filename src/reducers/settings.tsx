import { SET_HAND_TO_STRENGTHEN, SET_TUTORIAL_UNCOMPLETED, SET_TUTORIAL_COMPLETED } from '../actions'
export const initialState = {
    handToStrengthen: '',
    tutorialCompleted: true,
}

export default function general(state = initialState, action) {
    switch(action.type) {
        case SET_HAND_TO_STRENGTHEN:
            return {...state, handToStrengthen: action.hand}
        case SET_TUTORIAL_UNCOMPLETED:
            return {...state, tutorialCompleted: false}
        case SET_TUTORIAL_COMPLETED:
            return {...state, tutorialCompleted: true}
        default:
            return state

    }
}