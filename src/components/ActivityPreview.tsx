import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { connect } from 'react-redux'
import { toggleHabbitCompleted } from '../actions'
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import moment from 'moment';
import { checkHabitCompleted, calculateStreak } from '../constants/functions';
import { tracks } from '../constants/tracks';
const {height, width} = Dimensions.get('window');

function Habit(props) {
    const activity = props.activity

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }

    

    return(
        <View style={styles.listItemContainer}>
            <View style={styles.leftGroup}>
                <Image style={styles.icon} source={tracks.filter(t => t.id == activity.trackId)[0].icon}/>
                {/* <LinearGradient
                colors={item.colors}
                start={[0,0]}
                end={[0,1]}
                style={styles.habitIconContainer}
                >
                    <FontAwesome5 name={item.icon.slug} size={24} color="white" />
                </LinearGradient> */}
                <View style={styles.habitTextContainer}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.habitName}>{activity.activityName}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.habitDescription}>{activity.activityDescriptionUltraShort}</Text>
                    <View style={styles.habitInfoContainer}>
                        <View style={styles.habitLabelContainer}>
                            <Text style={styles.habitLabelContainerText}>{activity.trackName}</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Activity', {activity: activity, colors: tracks.filter(t => t.id == activity.trackId)[0].colors})}>
                <MaterialIcons name="arrow-forward-ios" size={26} color="#C7BFB0" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * .85,
        height: 110,
        borderRadius: 15,
        margin: width * .025,
        backgroundColor: '#FFFCF5',
        paddingHorizontal: 25,
        paddingTop: 20,
        paddingBottom: 18,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    leftGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 48,
        width: 48,
        margin: -4,
    },
    habitIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    habitName: {
        fontSize: 18,
        color: '#635C4E',
        fontFamily: 'DMSans_Medium',
        width: width * .5,
    },
    habitDescription: {
        fontSize: 14,
        color: '#635C4E',
        fontFamily: 'DMSans_Regular',
        width: width * .5,
    },
    habitTextContainer: {
        marginLeft: 18,
        justifyContent: 'center',
    },
    habitInfoContainer: {
        flexDirection: 'row',
        marginTop: 7,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    habitLabelContainer: {
        backgroundColor: '#F4F1E9',
        borderRadius: 10,
    },
    habitLabelContainerText: {
        fontSize: 12,
        color: '#C7BFB0',
        fontFamily: 'DMSans_Medium',
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    
})

const mapStateToProps = state => {
    return {
        habits: state.habits.allHabits,
    }
}

export default connect(
    mapStateToProps,
    {  }
)(Habit)