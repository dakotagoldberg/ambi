// drawing
import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { connect } from 'react-redux'
import  {PanGestureHandler} from 'react-native-gesture-handler'
import { render } from 'react-dom';
import RNDrawOnScreen from 'react-native-draw-on-screen';

const {height, width} = Dimensions.get('window');

class TestScreen extends React.Component {
    state = {
      color: 'black',
      strokeWidth: 20,
    };
   
    changeColor = (color) => {
      this.setState({ color });
    };
   
    changeBrushSize = (strokeWidth) => {
      this.setState({ strokeWidth });
    };
   
    undo = () => {
      this.RNDraw.undo();
    };
   
    clear = () => {
      this.RNDraw.clear();
    };
   
    render() {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          {/* <Controls
            handleColorChange={this.changeColor}
            handleBrushSizeChange={this.changeBrushSize}
            selectedColor={this.state.color}
            selectedStrokeWidth={this.state.strokeWidth}
            handleUndo={this.undo}
            handleClear={this.clear}
          /> */}
          <View
            style={{
              flex: 1,
              flexGrow: 1,
            //   border: 'solid',
              borderWidth: 2,
              borderColor: '#ccc',
            }}
          >
            <RNDrawOnScreen
              penColor={this.state.color}
              strokeWidth={this.state.strokeWidth}
              ref={(r) => (this.RNDraw = r)}
            />
          </View>
        </SafeAreaView>
      );
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
