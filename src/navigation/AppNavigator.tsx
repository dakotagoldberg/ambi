import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import HomeScreen from '../navigation/TabNavigator'
import IntroScreen from '../screens/TutorialScreen'



const Stack = createStackNavigator();

function HabitStack() {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            {/* <Stack.Screen name="Intro" component={IntroScreen} /> */}
            <Stack.Screen name="Home" component={HomeScreen} />


        </Stack.Navigator>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(HabitStack)
