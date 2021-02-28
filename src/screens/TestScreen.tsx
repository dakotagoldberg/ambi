import React from 'react'
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { connect } from 'react-redux'
import  {PanGestureHandler, TouchableOpacity} from 'react-native-gesture-handler'
import { render } from 'react-dom';
import { FontAwesome5, Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';
const {height, width} = Dimensions.get('window');

class Game1 extends React.Component {
  

    state = {
        points: 0,
        side: 'top',
        timerCounting: false,
        timer: null,
        counter: 30,
    }

    componentDidMount() {
      let timer = setInterval(this.tick, 1000);
      this.setState({timer});
    }
  
    componentWillUnmount() {
      clearInterval(this.state.timer);
    }
  
    tick =() => {
      if (this.state.counter > 0)
        this.setState({
          counter: this.state.counter - 1
        });
    }

    translateX = new Animated.Value(0)
    translateY = new Animated.Value(0)

    handleGesture = Animated.event([
        {
            nativeEvent: {
                translationX: this.translateX,
                translationY: this.translateY,
            }
        }
    ],
    {listener: (event, gestureState) => {
      let {nativeEvent} = event
      console.log({
        x:nativeEvent.absoluteX,
        y: nativeEvent.absoluteY,
      })
      if (this.state.side == 'top') {
        if (nativeEvent.absoluteX < 180 && nativeEvent.absoluteY < 200) {
          this.setState({
            points: this.state.points + 1,
          })
          this.setState({side: 'bottom'})
          if (this.state.timerCounting === false) {
            this.setState({timerCounting: true})
          }
        }
      }
      else {
        if (nativeEvent.absoluteX > 250 && nativeEvent.absoluteY < 600) {
          this.setState({
            points: this.state.points + 1,
          })
          this.setState({side: 'top'})
        }
      }
      
    }}
    )


    handleGesture2 = (evt) => {
      let{nativeEvent} = evt
      console.log(nativeEvent)
      if (nativeEvent.absoluteX < 50 && nativeEvent.absoluteY < 100) {
        this.setState({
          points: this.state.points + 1,
        })
      }
      
  }

    render() { 

      console.log(this.translateY)

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
          <>

            <View style={styles.container}>
            <LinearGradient
                colors={['#FDBC0C', '#FD800C']}
                start={[0,0]}
                end={[0,1]}
                style={styles.flag}
                >
                    <FontAwesome5 name='flag-checkered' size={40} color="white" />
                </LinearGradient>
            {/* <View style={styles.flag}/> */}
            <LinearGradient
                colors={['#FDBC0C', '#FD800C']}
                start={[0,0]}
                end={[0,1]}
                style={styles.flag2}
                >
                    <FontAwesome5 name='flag-checkered' size={40} color="white" />
                </LinearGradient>
                <Text style={styles.score}>{this.state.points}</Text>
                <Text style={styles.info}>Drag the car from flag to flag to get points!</Text>
                <Text style={[styles.info, {fontWeight: 'bold'}]}>Time Remaining: {this.state.counter}</Text>
                {this.state.counter > 0 && (
                  <PanGestureHandler onGestureEvent={this.handleGesture}>
                    <Animated.View style={[styles.object, circleTransformStyle]}>
                    <Ionicons name="car-sport-sharp" size={80} color="#3A3833" />
                    </Animated.View>
                </PanGestureHandler>
                )}
                
            </View>
            
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFCF5',
    },
    object: {
        // backgroundColor: '#012312',
        // height: 100, 
        // width: 100,
        // padding: 500,
        // borderRadius: 100,
        position: 'absolute',
    },
    score: {
      top: 100,
      fontSize: 30,
        color: '#635C4E',
        fontWeight: '500',
        // fontFamily: 'DMSans_Medium',
    },
    info: {
      top: 100,
      fontWeight: '400',
      color: '#948B79',
      fontSize:20,
      marginHorizontal: 60,
      textAlign: 'center',
    },
    flag: {
      top: 100,
      left: 50,
      borderRadius: 20,
      height: 100, 
      width: 100,
      justifyContent: 'center',
        alignItems: 'center',
      // padding: 500,
      // borderRadius: 100,
      position: 'absolute',
      shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    flag2: {
      top: 600,
      left: 250,
      borderRadius: 20,
      height: 100, 
      width: 100,
      justifyContent: 'center',
        alignItems: 'center',
      // padding: 500,
      // borderRadius: 100,
      position: 'absolute',
      shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },

})

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    {  }
)(Game1)
