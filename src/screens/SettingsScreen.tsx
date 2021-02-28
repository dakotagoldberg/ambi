import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

const {height, width} = Dimensions.get('window');

function SettingsScreen(props) {
    return(
        <View style={styles.container}>
            <Text>Settings</Text>
            
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
        
    }
}

export default connect(
    mapStateToProps,
    {  }
)(SettingsScreen)
