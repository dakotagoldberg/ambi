import moment from "moment"
import { tracks } from '../constants/tracks'

// Check if a habit has been completed today
export const checkHabitCompleted = (habit) => {
    let completed = false
    habit.datesCompleted.forEach(day => {
        if ((moment(day).isSame(new Date().toISOString(), 'd')))
            completed = true
    })
    return completed
}

// Calculate the current streak
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

// Check if an activity has been completed
export const checkActivityCompleted = (activityList, activityName) => {
    if (activityList.filter(activity => activity.id == activityName).length > 0)
        return activityList.filter(activity => activity.id == activityName)[0].dateCompleted != ''
    else
        return false
}

// Determine which activities should show up on the homepage
export const curateNextActivities = (trackSubscriptions, myActivities) => {
    let nextActivities = []
    trackSubscriptions.forEach(track => {
        let currentTrack = tracks.filter(t => t.id == track)[0]
        for (let i = 0; i < currentTrack.activities.length; i++) {
            if (checkActivityCompleted(myActivities, currentTrack.activities[i].activityId) == false) {
                let activityToAdd = currentTrack.activities.filter(a => a.activityId == currentTrack.activities[i].activityId)[0]
                nextActivities.push(activityToAdd)
                break
            }
        }
    })
    return nextActivities
}