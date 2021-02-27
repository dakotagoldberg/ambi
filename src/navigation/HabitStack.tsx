import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import HomeScreen from '../screens/HomeScreen'
import EditHabitsScreen from '../screens/EditHabitsScreen'


const Stack = createStackNavigator();

function GameStack() {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="EditHabits" component={EditHabitsScreen} />

        </Stack.Navigator>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(GameStack)