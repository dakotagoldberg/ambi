import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';
import { tracks } from '../constants/tracks'
import { LinearGradient } from 'expo-linear-gradient';
import Activity from '../components/Activity';
import { toggleTrackSubscription } from '../actions'
import moment from 'moment';
import { checkActivityCompleted, generateId } from '../constants/functions';
import HabitProgress from '../components/HabitProgress';
import ActivityProgress from '../components/ActivityProgress';

const {height, width} = Dimensions.get('window');


function ProgressScreen(props) {

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }

    const constructProgress = (habits, myActivities) => {
        let rawProgress = []
        habits.forEach(habit => {
            habit.datesCompleted && habit.datesCompleted.forEach(date => {
                rawProgress.push({
                    type: 'habit',
                    id: habit.id,
                    name: habit.name,
                    icon: habit.icon,
                    colors: habit.colors,
                    date: date,
                    key: generateId(),
                })
            })
        })
        myActivities.forEach(activity => {
            if (checkActivityCompleted(myActivities, activity.id)) {
                rawProgress.push({
                    type: 'activity',
                    id: activity.id,
                    name: tracks.filter(t => t.id == activity.id.split('_')[0])[0].activities.filter(a => a.activityId == activity.id)[0].activityName,
                    icon: tracks.filter(t => t.id == activity.id.split('_')[0])[0].icon,
                    date: activity.dateCompleted,
                    image: activity.image,
                    activity: tracks.filter(t => t.id == activity.id.split('_')[0])[0].activities.filter(a => a.activityId == activity.id)[0],
                    key: generateId(),
                })
            }
        })
        return rawProgress.sort((a, b) => moment(a.date).isBefore(moment(b.date)))
    }

    // const divideProgress = () => {
    //     let raw = constructProgress(props.habits, props.myActivities)
    //     let divided = []
    //     raw.forEach(item => {
    //         if (divided.filter(d => moment(d.title).format("MM_DD_YYYY") === moment(item.date).format("MM_DD_YYYY")).length > 1) {
    //             divided = divided.map(d => moment(d.title).format("MM_DD_YYYY") === moment(item.date).format("MM_DD_YYYY") ? {
    //                 ...d, data: [...d.data, item]
    //             } : d)
    //             // console.log('hi')
    //             // divided[0].data.push["h"]
    //         }
    //         else {
    //             divided.push({
    //                 title: moment(item.date).toISOString(),
    //                 data: [item]
    //             })
    //         }
    //     })
    //     return divided.sort((a, b) => moment(a.title).isBefore(moment(b.title)))
    // }
    // divideProgress()

    // constructProgress(props.habits, props.myActivities)


    return (
        <View style={styles.container}>
            <View style={styles.topPanel}>
                <View style={styles.headerRow}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => props.navigation.goBack()}
                    >
                        <MaterialIcons name="arrow-back-ios" size={30} color="#3A3833" />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>
                        Progress
                    </Text>
                </View>
                <Text style={styles.descriptionText}>
                        See your progress over time!
                </Text>
                {/* <TouchableOpacity onPress={() => props.toggleTrackSubscription(track.id)}>
                    <LinearGradient
                            colors={['#FDBC0C', '#FD800C']}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.subscribeButton}
                            >
                            <TouchableOpacity>
                                <Text style={styles.subscribeButtonText}>+ Journal Entry</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                </TouchableOpacity> */}
            </View>
            {/* <FlatList
                style={{marginTop: 50,}}
                data={track.activities}
                keyExtractor={(item: any) => item.activityId}
                renderItem={({item}) => (
                    <Activity navigation={props.navigation} colors={track.colors} activity={item}/>
                )}
                ListFooterComponent={() => (
                    <View style={styles.listItemContainer}><Text style={styles.listEndText}>More Coming Soon!</Text></View>
                )}
            /> */}
            <FlatList
                style={{marginTop: 25}}
                data={constructProgress(props.habits, props.myActivities)}
                keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => <View style={{height: 30,}}></View>}
                renderItem={({item}) => {
                    if (item.type == 'habit') {
                        return (
                            <>
                                <Text style={styles.date}>{(moment(item.date)).calendar(null,{
                                    sameDay: '[Today]',
                                    nextDay: '[Tomorrow]',
                                    nextWeek: 'dddd',
                                    lastDay: '[Yesterday]',
                                    lastWeek: '[Last] dddd',
                                    sameElse: 'MMMM D, YYYY',         
                                    })}</Text>
                                <HabitProgress habit={item}/>
                            </>
                        )
                    }
                    else {
                        return (
                            <>
                                <Text style={styles.date}>{(moment(item.date)).calendar(null,{
                                    sameDay: '[Today]',
                                    nextDay: '[Tomorrow]',
                                    nextWeek: 'dddd',
                                    lastDay: '[Yesterday]',
                                    lastWeek: '[Last] dddd',
                                    sameElse: 'MMMM D, YYYY',         
                                    })}</Text>
                                <ActivityProgress navigation={props.navigation} activity={item}/>
                            </>
                        )
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEFCE',
        alignItems: 'center',
    },
    topPanel: {
        // height: 200,
        width: width,
        borderRadius: 30,
        // paddingTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 40,
        backgroundColor: '#FFFCF5',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
    backButton: {
        position: 'absolute',
        left: 0,
        padding: 30,
    },
    titleText: {
        fontSize: 30,
        color: '#3A3833',
        fontFamily: 'DMSans_Bold'
    },
    descriptionText: {
        marginTop: 3,
        fontSize: 18,
        color: '#635C4E',
        fontFamily: 'DMSans_Regular',
        textAlign: 'center',
    },

    subscribeButton: {
        position: 'absolute',
        marginTop: 15,
        alignSelf: 'center',
        // width: 200,
        paddingHorizontal: 25,
        height: 55,
        borderRadius: 30,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subscribeButtonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold'
    },
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
    listEndText: {
        fontSize: 20,
        color: '#635C4E',
        fontFamily: 'DMSans_Bold',
    },
    date: {
        fontSize: 18,
        color: '#635C4E',
        fontFamily: 'DMSans_Medium',
        margin: 5,
    }
})
const mapStateToProps = state => {
    return {
        myActivities: state.tracks.myActivities,
        habits: state.habits.allHabits, 
    }
}
export default connect(
    mapStateToProps,
    { toggleTrackSubscription }
)(ProgressScreen)