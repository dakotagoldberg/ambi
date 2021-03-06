import moment from 'moment'
import { ADD_HABIT, TOGGLE_ADD_HABIT, REMOVE_HABIT, SET_HABIT_COMPLETED_TRUE, SET_HABIT_COMPLETED_FALSE, TOGGLE_HABIT_COMPLETED } from '../actions'

export const initialState = {
    allHabits: [
        {
            name: 'Brush Teeth',
            id: 'brush_teeth',
            icon: {slug: 'tooth'},
            colors: ['#FDBC0C', '#FD800C'],
            streak: 0,
            longestStreak: 0,
            datesCompleted: ['2021-02-28T19:11:17.511Z', '2021-02-27T19:11:46.091Z', '2021-02-26T19:12:13.924Z', '2021-02-25T19:12:13.924Z', '2021-02-24T19:12:13.924Z', '2021-02-22T19:12:13.924Z', '2021-02-19T19:12:13.924Z', '2021-02-13T21:03:48.556Z'],
            currentHabit: true,
            completedToday: false,
        },
        {
            name: 'Use Utensils',
            id: 'utensils',
            icon: {slug: 'utensils'},
            colors: ['#FF7F77', '#FC3DD2'],
            streak: 0,
            longestStreak: 0,
            datesCompleted: ['2021-02-28T21:03:48.556Z', '2021-02-24T21:03:48.556Z',],
            currentHabit: true,
            completedToday: false,
        },
        {
            name: 'Brush Hair',
            id: 'brush_hair',
            icon: {slug: 'brush'},
            colors: ['#09C4FF', '#096BFF'],
            streak: 0,
            longestStreak: 0,
            datesCompleted: ['2021-02-25T21:03:48.556Z', '2021-02-24T21:03:48.556Z', '2021-02-22T21:03:48.556Z',],
            currentHabit: false,
            completedToday: false,
        }
    ],
}

export default function habits(state = initialState, action) {
    switch(action.type) {
        case ADD_HABIT:
            return {...state, allHabits: state.allHabits.map(habit => 
                action.habit.id === habit.id ? {...habit, currentHabit: true} : habit
            )}
        case TOGGLE_ADD_HABIT:
            return {...state, allHabits: state.allHabits.map(habit => 
                action.habit.id === habit.id ? {...habit, currentHabit: !habit.currentHabit} : habit
            )}
        case REMOVE_HABIT:
            return {...state, allHabits: state.allHabits.map(habit => 
                action.habit.id === habit.id ? {...habit, currentHabit: false} : habit
            )}
        // case SET_HABIT_COMPLETED_FALSE:
        //     console.log(state.allHabits.forEach(habit => {
        //         if (action.habit.id === habit.id) {
        //             habit.datesCompleted.forEach(date => console.log((moment(date).isSame(new Date().toISOString(), 'd'))))
        //         }
        //     }))
        //     return {...state, allHabits: state.allHabits.map(habit => 
        //         action.habit.id === habit.id ? {...habit, datesCompleted: habit.datesCompleted.filter(date => (moment(date).isSame(new Date().toISOString(), 'd')))} : habit
        //     )}
        // case SET_HABIT_COMPLETED_TRUE:
        //     return {...state, allHabits: state.allHabits.map(habit => 
        //         action.habit.id === habit.id ? {...habit, datesCompleted: [new Date().toISOString(), ...habit.datesCompleted]} : habit
        //     )}
        case TOGGLE_HABIT_COMPLETED:
            let completed = false
            state.allHabits.forEach(habit => {
                if (action.habit.id === habit.id) {
                    habit.datesCompleted.forEach(day => {
                        if ((moment(day).isSame(new Date().toISOString(), 'd')))
                            completed = true
                    })
                }
            })
            if (completed) {
                return {...state, allHabits: state.allHabits.map(habit => 
                    action.habit.id === habit.id ? {...habit, datesCompleted: habit.datesCompleted.filter(date => !(moment(date).isSame(new Date().toISOString(), 'd')))} : habit
                )}
            }
            else {
                return {...state, allHabits: state.allHabits.map(habit => 
                    action.habit.id === habit.id ? {...habit, datesCompleted: [new Date().toISOString(), ...habit.datesCompleted]} : habit
                )}
            }
            
            
        default:
            return state

    }
}
