import { ADD_HABIT, TOGGLE_ADD_HABIT, REMOVE_HABIT } from '../actions'

export const initialState = {
    allHabits: [
        {
            name: 'Brush Teeth',
            id: 'brush_teeth',
            icon: {slug: 'tooth'},
            colors: ['#FDBC0C', '#FD800C'],
            streak: 17,
            longestStreak: 17,
            datesCompleted: [],
            currentHabit: true,
            completedToday: true,
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
        default:
            return state

    }
}