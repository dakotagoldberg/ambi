import { ADD_HABIT, TOGGLE_ADD_HABIT, REMOVE_HABIT } from '../actions'

export const initialState = {
    allHabits: [
        {
            name: 'Brush Teeth',
            id: 'brush_teeth',
            icon: {slug: 'tooth'},
            streak: 0,
            longestStreak: 0,
            datesCompleted: [],
            currentHabit: true,
            completedToday: false,
        },
        {
            name: 'Use Utensils',
            id: 'utensils',
            icon: {slug: 'utensils'},
            streak: 0,
            longestStreak: 0,
            datesCompleted: [],
            currentHabit: true,
            completedToday: false,
        },
        {
            name: 'Brush Hair',
            id: 'brush_hair',
            icon: {slug: 'brush'},
            streak: 0,
            longestStreak: 0,
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