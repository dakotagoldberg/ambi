import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome5, Octicons } from '@expo/vector-icons'; 
import { connect } from 'react-redux'
import { toggleAddHabit } from '../actions'
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
const {height, width} = Dimensions.get('window');

function HabitCompact(props) {
    const item = props.habit

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }

    return(
        <View style={{alignItems: 'center'}}>
            <View style={styles.listItemContainer}>
                <View style={styles.topContainer}>
                    <Text numberOfLines={3} ellipsizeMode='tail' style={styles.titleText}>{props.activity.activityName}</Text>
                    <LinearGradient
                            colors={props.colors}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.checkContainer}
                        >
                            <Octicons 
                                name="check" 
                                size={16}
                                color="white" 
                            />
                        </LinearGradient>
                    </View>
                    <Text numberOfLines={3} ellipsizeMode='tail' style={styles.descriptionText}>{props.activity.activityDescriptionShort}</Text>
                    <TouchableOpacity style={styles.gradientButtonContainer} onPress={() => props.navigation.navigate('TrackOverview', {name: 'sports'})}>
                        <LinearGradient
                            colors={props.colors}
                            start={[0,0]}
                            end={[0,1]}
                            style={[styles.gradientButton]}
                            >
                                <Text style={styles.gradientButtonText}>Let's Go</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
            </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * .85,
        // height: 75,
        borderRadius: 15,
        marginHorizontal: width * .025,
        // marginVertical: width * .05,
        backgroundColor: '#FFFCF5',
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 18,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * .85,
        paddingHorizontal: 30,
        alignItems: 'center',

    },
    titleText: {
        fontSize: 20,
        width: width * .5,
        color: '#635C4E',
        fontFamily: 'DMSans_Bold',
    },
    checkContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25,
        borderRadius: 13,
    },
    descriptionText: {
        marginTop: 12,
        fontSize: 16,
        color: '#948B79',
        fontFamily: 'DMSans_Regular',
    },
    gradientButtonContainer: {
        alignSelf: 'flex-start',
        width: width * .85,
        marginTop: 15,
        paddingHorizontal: 30,
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
    },
    gradientButton: {
        // alignSelf: 'flex-start',
        width: 140,
        height: 40,
        borderRadius: 20,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradientButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold'
    },
    line: {
        height: width * .07,
        width: 6,
        backgroundColor: '#F1D293',
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.05,
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
)(HabitCompact)