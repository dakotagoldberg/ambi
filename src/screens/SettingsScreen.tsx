import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { setHandToStrengthen } from '../actions'
const {height, width} = Dimensions.get('window');

function SettingsScreen(props) {
    return(
        <View style={styles.container}>
            <Text>Select which hand you want to improve</Text>
            <TouchableOpacity onPress={() => props.setHandToStrengthen('left')} style={{backgroundColor: props.hand == 'left' ? 'pink' : 'transparent', margin: 10}}>
                <Text>Left Hand</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.setHandToStrengthen('right')} style={{backgroundColor: props.hand == 'right' ? 'pink' : 'transparent', margin: 10}}>
                <Text>Right Hand</Text>
            </TouchableOpacity>
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
        hand: state.settings.handToStrengthen,
    }
}

export default connect(
    mapStateToProps,
    { setHandToStrengthen }
)(SettingsScreen)
