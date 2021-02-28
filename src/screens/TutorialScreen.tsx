import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SectionList, FlatList, ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';

const {height, width} = Dimensions.get('window');



function TutorialScreen(props) {

    // const [loaded] = useFonts(fonts);
    // if (!loaded) { return null; }

    const [dotSel, setDots] = useState([['#FDBC0C', '#FD800C'], ['#C4C4C4', '#C4C4C4'], ['#C4C4C4', '#C4C4C4']]);
    const [page, setPage] = useState(0);
    const [topWidth, setWidth] = useState(width);
    const [nonDomHand,setHand] = useState('');

    const finalButton = (hand) =>{
        setHand(hand)
        console.log(hand)
        
    }
    const switchDot = (pageNum) => {
    
        let temp = dotSel
        temp = [['#C4C4C4', '#C4C4C4'], ['#C4C4C4', '#C4C4C4'], ['#C4C4C4', '#C4C4C4']]
        
        temp[Math.round(pageNum)] = ['#FDBC0C', '#FD800C']
        setDots(temp)
        
        if(pageNum >2.5){
            setWidth(0)
        }
        else{
            setWidth(width)
        }
        
    }


    return (
        <View style = {styles.container}>
           <View style = {{backgroundColor:'#FFFCF5', width:topWidth, paddingLeft:30}}>
            <Text style = {styles.titleText}>Welcome to Ambi</Text>
            <Text style = {styles.subText}>Train your non-dominant hand</Text>
            </View>
                <ScrollView 
                    horizontal 
                    scrollEventThrottle = {16} 
                    pagingEnabled = {true}
                    showsHorizontalScrollIndicator= {false}
                    onScroll ={event => switchDot(event.nativeEvent.contentOffset.x/width)}
                    contentOffset={{x:(width * (page-1)), y:0}}
                    
                >
                    
                    <View style = {styles.page}>
                        <View style = {{
                            
                            paddingLeft:30,
                            height:400,
                            width: width-60,
                            borderRadius: 15,
                            backgroundColor: '#FDBC0C', //'#FFFCF5',
                            
                            shadowOffset: {width: 0, height: 5},
                            shadowColor: "#8E3D02",
                            shadowOpacity: 0.1,
                            shadowRadius: 10,
                            paddingHorizontal: 30,
                            }}>

                            </View>
                            <Text style = {styles.downText}>Complete daily tasks</Text>
                    </View>

                    <View style = {styles.page}>
                    <View style = {{
                            
                            
                            height:400,
                            width: width-60,
                            borderRadius: 15,
                            backgroundColor: '#FF7F77', //'#FFFCF5',
                            
                            shadowOffset: {width: 0, height: 5},
                            shadowColor: "#8E3D02",
                            shadowOpacity: 0.1,
                            shadowRadius: 10,
                            paddingHorizontal: 30,
                            }}>

                            </View>
                        <Text style = {styles.downText}>Practice new skills</Text>
                    </View>

                    <View style = {styles.page}>
                    <View style = {{
                            
                            
                            height:400,
                            width: width-60,
                            borderRadius: 15,
                            backgroundColor: '#09C4FF', //'#FFFCF5',
                            
                            shadowOffset: {width: 0, height: 5},
                            shadowColor: "#8E3D02",
                            shadowOpacity: 0.1,
                            shadowRadius: 10,
                            paddingHorizontal: 30,
                            }}>

                            </View>
                      
                        <Text style = {styles.downText}>Track your progress</Text>
                    </View>
                    <View style = {styles.page}>
                    <Text style = {{
                        paddingTop:40,
                        paddingBottom:100 ,
      
                        height:100,
                        
                        fontSize: 38,
                        color: '#3A3833',
                        fontFamily: 'DMSans_Bold',
                        fontWeight:'bold',

                    }}>Let's begin</Text>
                    <View style = {{
                            
                            
                            height:200,
                            width: width-60,
                            borderRadius: 15,
                            backgroundColor: '#FFF5DF', 
                            
                            shadowOffset: {width: 0, height: 5},
                            shadowColor: "#8E3D02",
                            shadowOpacity: 0.1,
                            shadowRadius: 10,
                            paddingHorizontal: 30,
                            alignItems:'center'
                            }}>
                                <Text style = {{
                                    fontFamily: 'DMSans_Bold',
                                    fontWeight:'bold',
                                    fontSize:28,
                                    width:197,
                                    paddingTop:25,
                                    textAlign:'center',
                                }}>Select your dominant hand</Text>
                                <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity>
                                    <LinearGradient 
                                    colors={['#FDBC0C', '#FD800C']}
                                    start={[0,0]}
                                    end={[0,1]}
                                    style={styles.gradButton}>
                                        <Text style = {styles.buttonText}>Left</Text>
                                    </LinearGradient>
                                    </TouchableOpacity>

                                <TouchableOpacity>
                                <LinearGradient 
                                    colors={['#FDBC0C', '#FD800C']}
                                    start={[0,0]}
                                    end={[0,1]}
                                    style={styles.gradButton}>
                                        <Text style = {styles.buttonText}>Right</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                       
                    </View>
                </ScrollView>
            
                <View style = {{
                    backgroundColor: '#FFFCF5',
                    paddingBottom: 0,
                    height: 95,
                    width: width,
                    borderTopWidth:0,
                    elevation: 0,
                    shadowOffset: {width: 0, height: -5},
                    shadowColor: "#8E3D02",
                    shadowOpacity: 0.2,
                    shadowRadius: 10,}}>
                    
                    <View style = {styles.dotContainer}>
                    <LinearGradient 
                                colors={dotSel[0]}
                                start={[0,0]}
                                end={[0,1]}
                                style = {styles.dots}/>
                        
                        <LinearGradient 
                                colors={dotSel[1]}
                                start={[0,0]}
                                end={[0,1]}
                                style = {styles.dots}/>
                        <LinearGradient 
                                colors={dotSel[2]}
                                start={[0,0]}
                                end={[0,1]}
                                style = {styles.dots}/>
                        <TouchableOpacity onPress = {() =>{setPage(4)}}>
                            <LinearGradient 
                                colors={['#FDBC0C', '#FD800C']}
                                start={[0,0]}
                                end={[0,1]}
                                style = {{
                                    width:50,
                                    height:50,
                                    borderRadius:25,
                                    alignItems:'center'
                                }}>
                                <View style = {{margin:17,backgroundColor:'#FFFCF5',width:17,height:17,borderRadius:10}}></View>

                                </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
            
            
            
         
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCF5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    page: {
        width:width,
        alignItems:'center',
        paddingTop:50,
        backgroundColor:'#FFFCF5'
        

    },
    text: {
        fontSize: 50,

    },
    dotContainer:{
        
        paddingTop:22,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:90,
        marginRight:90,
        justifyContent:'space-around'
        
    },
    dots: {
        width:17,
        height:17,
        borderRadius:17/2,
        backgroundColor: '#C4C4C4'
    },
    titleText: {
            // paddingTop:60,
            
        
            // height:100,
            
            // fontSize: 38,
            color: '#3A3833',
            fontFamily: 'DMSans_Bold',
            fontWeight:'bold',
        
    },
    subText: {
        paddingTop:10,
        paddingLeft:22,
        fontSize: 20,
        color: '#948B79',
        fontFamily: 'DMSans_Regular',
        fontWeight:'normal',
        
    },
    downText:{
        paddingTop:25,
        
        fontSize: 24,
        color: '#3A3833',
        fontFamily: 'DMSans_Bold',
        fontWeight:'bold',
    },
    gradButton: {
        alignItems:'center',
        width:110,
        height:42,
        borderRadius:20,
        margin:17
    },
    buttonText: {
        paddingTop:5,
        
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold'
    },
    
});
const mapStateToProps = state => {
    return {
        
    }
}
export default connect(
    mapStateToProps,
    {}
)(TutorialScreen)