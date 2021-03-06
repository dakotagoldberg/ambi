import { TOGGLE_TRACK_SUBSCRIPTION, TOGGLE_ACTIVITY_COMPLETED, SET_ACTIVITY_IMAGE } from '../actions'
export const initialState = {
    trackSubscriptions: [],
    myActivities: [
        {
            id: 'handwriting_getting_started',
            dateCompleted: '',
            image: null,
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
            if (state.myActivities.filter(activity => activity.id == action.activity).length == 0) {
                return {...state, myActivities: [...state.myActivities, {
                    id: action.activity,
                    dateCompleted: action.date,
                }]}
            }
            else if (state.myActivities.filter(activity => activity.id == action.activity)[0].dateCompleted == '') {
                return {...state, myActivities: state.myActivities.map(activity => activity.id === action.activity ? {...activity, dateCompleted: action.date} : activity)}
            }
            else {
                return {...state, myActivities: state.myActivities.map(activity => activity.id === action.activity ? {...activity, dateCompleted: ''} : activity)}
            }
        case SET_ACTIVITY_IMAGE:
            
            if (state.myActivities.filter(activity => activity.id == action.activity).length == 0) {
                return {...state, myActivities: [...state.myActivities, {
                    id: action.activity,
                    dateCompleted: action.date,
                    image: action.image,
                }]}
            }
            else if (state.myActivities.filter(activity => activity.id == action.activity)[0].dateCompleted == '') {
                return {...state, myActivities: state.myActivities.map(activity => activity.id === action.activity ? {...activity, dateCompleted: action.date, image: action.image,} : activity)}
            }
            else {
                return {...state, myActivities: state.myActivities.map(activity => activity.id === action.activity ? {...activity, image: action.image, dateCompleted: activity.dateCompleted} : activity)}
            }
        default:
            return state

    }
}