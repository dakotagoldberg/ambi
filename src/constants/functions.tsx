import moment from "moment"

export const checkHabitCompleted = (habit) => {
    let completed = false
    habit.datesCompleted.forEach(day => {
        if ((moment(day).isSame(new Date().toISOString(), 'd')))
            completed = true
    })
    return completed
}

export const calculateStreak = (habit) => {
    if (habit.datesCompleted.length < 1)
        return 0
    else if (habit.datesCompleted.length == 1) {
        if (checkHabitCompleted(habit) || moment(habit.datesCompleted[0]).isSame(new Date().toISOString(), 'd'))
            return 1
        else
            return 0
    }
    let streak = 0
    if (checkHabitCompleted(habit)) {
        if (moment(habit.datesCompleted[1]).diff(moment(new Date().toISOString()), 'd') == -1) {
            for (let i = 0; i < habit.datesCompleted.length - 1; i++) {
                if (moment(habit.datesCompleted[i]).diff(moment(habit.datesCompleted[i + 1]), 'd') == 1) {
                    console.log ('heyyy')
                    streak += 1
                }
                else {
                    return streak
                }
            }
        }
        else
            return 1
    }
    else {
        if (moment(habit.datesCompleted[0]).diff(moment(new Date().toISOString()), 'd') == -1) {
            for (let i = 0; i < habit.datesCompleted.length - 1; i++) {
                if (moment(habit.datesCompleted[i]).diff(moment(habit.datesCompleted[i + 1]), 'd') == 1) {
                    console.log ('heyyy')
                    streak += 1
                }
                else {
                    return streak
                }
            }
        }
        else
            return 0
    }
    
    
    return streak
}