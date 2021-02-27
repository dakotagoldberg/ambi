import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { toggleAddHabit } from '../actions'
const {height, width} = Dimensions.get('window');

function EditHabitsScreen(props) {
    return(
        <View style={styles.container}>
            <Text>Edit Habits Screen</Text>
            {props.habits && props.habits && props.habits.map(habit => {
                    return (
                        <TouchableOpacity style={{
                            backgroundColor: habit.currentHabit ? 'pink' : 'red',
                            margin: 10,
                            padding: 20,
                        }} key={habit.id}
                        onPress={() => props.toggleAddHabit(habit)}
                        >
                            <Text>{habit.name}</Text>
                        </TouchableOpacity>
                    )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const mapStateToProps = state => {
    return {
        habits: state.habits.allHabits,
    }
}

export default connect(
    mapStateToProps,
    { toggleAddHabit }
)(EditHabitsScreen)