import moment from 'moment'
import { ADD_HABIT, TOGGLE_ADD_HABIT, REMOVE_HABIT, SET_HABIT_COMPLETED_TRUE, SET_HABIT_COMPLETED_FALSE, TOGGLE_HABIT_COMPLETED } from '../actions'

export const initialState = {
    allHabits: [
        {
            name: 'Brush Teeth',
            id: 'brush_teeth',
            icon: {slug: 'tooth'},
            colors: ['#FDBC0C', '#FD800C'],
            streak: 17,
            longestStreak: 17,
            datesCompleted: ['2021-02-27T21:03:48.556Z'],
            currentHabit: true,
            completedToday: false,
        },
        {
            name: 'Use Utensils',
            id: 'utensils',
            icon: {slug: 'utensils'},
            colors: ['#FF7F77', '#FC3DD2'],
            streak: 3,
            longestStreak: 3,
            datesCompleted: [],
            currentHabit: true,
            completedToday: false,
        },
        {
            name: 'Brush Hair',
            id: 'brush_hair',
            icon: {slug: 'brush'},
            colors: ['#09C4FF', '#096BFF'],
            streak: 8,
            longestStreak: 8,
            datesCompleted: [],
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
        case SET_HABIT_COMPLETED_FALSE:
            console.log(state.allHabits.forEach(habit => {
                if (action.habit.id === habit.id) {
                    habit.datesCompleted.forEach(date => console.log((moment(date).isSame(new Date().toISOString(), 'd'))))
                }
            }))
            return {...state, allHabits: state.allHabits.map(habit => 
                action.habit.id === habit.id ? {...habit, datesCompleted: habit.datesCompleted.filter(date => (moment(date).isSame(new Date().toISOString(), 'd')))} : habit
            )}
        case SET_HABIT_COMPLETED_TRUE:
            return {...state, allHabits: state.allHabits.map(habit => 
                action.habit.id === habit.id ? {...habit, datesCompleted: [new Date().toISOString(), ...habit.datesCompleted]} : habit
            )}
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