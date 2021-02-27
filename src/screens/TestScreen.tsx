import React from 'react'
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { connect } from 'react-redux'
import  {PanGestureHandler} from 'react-native-gesture-handler'
import { render } from 'react-dom';

const {height, width} = Dimensions.get('window');

class TestScreen extends React.Component {

    translateX = new Animated.Value(0)
    translateY = new Animated.Value(0)

    handleGesture = Animated.event([
        {
            nativeEvent: {
                translationX: this.translateX,
                translationY: this.translateY,
            }
        }
    ])

    render() { 

        let circleTransformStyle
        circleTransformStyle = {
            transform: [
                {
                    translateY: this.translateY,
                },
                {
                    translateX: this.translateX,
                }
            ]
        }

        return(
            <View style={styles.container}>
                <PanGestureHandler onGestureEvent={this.handleGesture}>
                    <Animated.View style={[styles.object, circleTransformStyle]}></Animated.View>
                </PanGestureHandler>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    object: {
        backgroundColor: '#012312',
        padding: 20,
        borderRadius: 100,
    },
})

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    {  }
)(TestScreen)