import { TOGGLE_TRACK_SUBSCRIPTION, TOGGLE_ACTIVITY_COMPLETED } from '../actions'
export const initialState = {
    trackSubscriptions: [],
    myActivities: [
        {
            id: 'handwriting_getting_started',
            dateCompleted: '',
            scores: {},
            files: {},
        }
    ],

}

export default function tracks(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_TRACK_SUBSCRIPTION:
            if (state.trackSubscriptions.includes(action.track)) {
                return {...state, trackSubscriptions: state.trackSubscriptions.filter(track => track != action.track)}
            }
            else {
                return {...state, trackSubscriptions: [...state.trackSubscriptions, action.track]}
            }
        case TOGGLE_ACTIVITY_COMPLETED:
            if (state.myActivities.filter(activity => activity.id == action.track).length == 0) {
                return {...state, myActivities: [...state.myActivities, {
                    id: action.track,
                    dateCompleted: action.date,
                }]}
            }
            else if (state.myActivities.filter(activity => activity.id == action.track)[0].dateCompleted == '') {
                return {...state, myActivities: state.myActivities.map(activity => activity.id === action.track ? {...activity, dateCompleted: action.date} : activity)}
            }
            else {
                return {...state, myActivities: state.myActivities.map(activity => activity.id === action.track ? {...activity, dateCompleted: ''} : activity)}
            }
            // if (state.myActivities.filter(activity => activity.id == action.track)[0].dateCompleted == '') {
            //     return {...state, myActivities: state.myActivities.map(activity => activity.id == action.track ? {...activity, dateCompleted: action.date} : activity)}
            // }
            // else {
            //     return {...state, myActivities: state.myActivities.map(activity => activity.id == action.track ? {...activity, dateCompleted: ''} : activity)}
            // }
        // case SET_ACTIVITY_COMPLETED:
        //     return {...state, myActivities: state.myActivities.map(activity => activity.id == action.track ? {...activity, dateCompleted: action.date} : activity)}
        // case SET_ACTIVITY_UNCOMPLETED:
        //     return {...state, myActivities: state.myActivities.map(activity => activity.id == action.track ? {...activity, dateCompleted: ''} : activity)}
        default:
            return state

    }
}