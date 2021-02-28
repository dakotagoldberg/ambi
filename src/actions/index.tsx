// Action Types

export const ADD_HABIT = 'ADD_HABIT'
export const TOGGLE_ADD_HABIT = 'TOGGLE_ADD_HABIT'
export const REMOVE_HABIT = 'REMOVE_HABIT'

export const TOGGLE_HABIT_COMPLETED = 'TOGGLE_HABIT_COMPLETED'
export const SET_HABIT_COMPLETED_TRUE = 'SET_HABIT_COMPLETED_TRUE'
export const SET_HABIT_COMPLETED_FALSE = 'SET_HABIT_COMPLETED_FALSE'

export const TOGGLE_TRACK_SUBSCRIPTION = 'TOGGLE_TRACK_SUBSCRIPTION'
export const TOGGLE_ACTIVITY_COMPLETED = 'TOGGLE_ACTIVITY_COMPLETED'
export const SET_ACTIVITY_IMAGE = 'SET_ACTIVITY_IMAGE'


// Action Creators

// Habits
export function addHabit(habit: string) {
    return { type: ADD_HABIT, habit }
}

export function toggleAddHabit(habit: string) {
    return { type: TOGGLE_ADD_HABIT, habit }
}

export function removeHabit(habit: string) {
    return { type: REMOVE_HABIT, habit }
}

export function toggleHabbitCompleted(habit: string) {
    return { type: TOGGLE_HABIT_COMPLETED, habit }
}


// Tracks
export function toggleTrackSubscription(track: string) {
    return { type: TOGGLE_TRACK_SUBSCRIPTION, track }
}

export function toggleActivityCompleted(track: string) {
    return { type: TOGGLE_ACTIVITY_COMPLETED, track, date: new Date().toISOString() }
}

export function setActivityImage(activity: string, image) {
    return { type: SET_ACTIVITY_IMAGE, activity, image, date: new Date().toISOString() }
}
