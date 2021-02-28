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
import { checkActivityCompleted } from '../constants/functions';
const {height, width} = Dimensions.get('window');

function HabitCompact(props) {
    const item = props.habit

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }

    return(
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Activity', {activity: props.activity, colors: props.colors})} style={styles.listItemContainer}>
                <View style={styles.topContainer}>
                    <Text numberOfLines={3} ellipsizeMode='tail' style={styles.titleText}>{props.activity.activityName}</Text>
                    <LinearGradient
                            colors={checkActivityCompleted(props.myActivities, props.activity.activityId) ? props.colors : ['transparent', 'transparent']}
                            start={[0,0]}
                            end={[0,1]}
                            style={checkActivityCompleted(props.myActivities, props.activity.activityId) ? styles.checkContainer : styles.checkContainerUnchecked}
                        >
                            <Octicons 
                                name="check" 
                                size={16}
                                color={checkActivityCompleted(props.myActivities, props.activity.activityId) ? "white" : '#C7BFB0'} 
                            />
                        </LinearGradient>
                    </View>
                    <Text numberOfLines={5} ellipsizeMode='tail' style={styles.descriptionText}>{props.activity.activityDescriptionShort}</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.gradientButtonContainer} onPress={() => props.navigation.navigate('Activity', {activity: props.activity, colors: props.colors})}>
                            <LinearGradient
                                colors={props.colors}
                                start={[0,0]}
                                end={[0,1]}
                                style={[styles.gradientButton]}
                                >
                                    <Text style={styles.gradientButtonText}>Let's Go</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={styles.difficultyContainer}>
                            <Text style={styles.difficultyText}>{props.activity.activityDifficulty}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
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
    checkContainerUnchecked: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25,
        borderRadius: 13,
        borderColor: '#C7BFB0',
        borderWidth: 2,
    },
    descriptionText: {
        marginTop: 12,
        fontSize: 16,
        color: '#948B79',
        fontFamily: 'DMSans_Regular',
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        width: width * .85,
        paddingHorizontal: 30,

    },
    gradientButtonContainer: {
        alignSelf: 'flex-start',
        // width: width * .85,
        // paddingHorizontal: 30,
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
    difficultyContainer: {
        backgroundColor: '#F4F1E9',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    difficultyText: {
        fontSize: 13,
        color: '#C7BFB0',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Medium'
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
        myActivities: state.tracks.myActivities,
    }
}

export default connect(
    mapStateToProps,
    {  }
)(HabitCompact)