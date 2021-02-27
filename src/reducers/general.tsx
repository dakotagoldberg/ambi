
export const initialState = {
    
}

export default function general(state = initialState, action) {
    switch(action.type) {
        case 'CASE':
            return {...state}
        default:
            return state

    }
}