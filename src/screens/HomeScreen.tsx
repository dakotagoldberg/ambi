import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'

const {height, width} = Dimensions.get('window');

function HomeScreen(props) {
    return(
        <View style={styles.container}>
            <Text>Welcome to Ambi</Text>
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
)(HomeScreen)