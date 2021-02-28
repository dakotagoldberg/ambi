import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SectionList, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';
import { tracks } from '../constants/tracks'
import { LinearGradient } from 'expo-linear-gradient';
import { toggleActivityCompleted } from '../actions'
import { checkActivityCompleted } from '../constants/functions';
const {height, width} = Dimensions.get('window');


function ActivityScreen(props) {

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }

    const activity = props.route.params.activity

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => props.navigation.goBack()}
                >
                    <MaterialIcons name="arrow-back-ios" size={30} color="#3A3833" />
                </TouchableOpacity>
                {/* <Text style={styles.titleText}>Edit Habits</Text> */}
            </View>  
            <Text style={styles.activityTitle}>{activity.activityName}</Text>
            <TouchableOpacity onPress={() => props.toggleActivityCompleted(activity.activityId)}>
                <Text style={styles. markCompletionButtonText}>{checkActivityCompleted(props.myActivities, activity.activityId) ? 'Completed' : 'Mark Complete'}</Text>
                <LinearGradient
                        colors={['#FDBC0C', '#FD800C']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.markCompleteButton}
                        >
                            <Text style={styles.markCompletionButtonText}>Mark Complete</Text>
                    </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.actualDes}>Welcome to Ambi! Let's start with some simple handwriting practice. Grab any piece of paper, and write your name once with your right hand and then again with your left. Don't worry if either look messy — you're on your way to improving your handwriting and strength. Once you're done, take a picture of each name and submit them in the appropriate places below. Don't worry, we'll never save any images you upload — this is so we can score the readability of your writing and track your progress!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCF5',
        alignItems: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
    Button: {
        position: 'absolute',
        marginTop: 15,
        alignSelf: 'center',
        width: 200,
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
    markCompleteButton: {
        position: 'absolute',
        width: 150,
        height: 31,
        alignSelf: 'center',
        borderRadius: 15,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        top: 10,
        justifyContent: 'center',
    },
    markCompletionButtonText: {
        position: 'absolute',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        color: '#fff',
    },
    description: {
        position: 'absolute',
        width: 136,
        height: 31,
        left: 40,
        top: 200,
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 31,
        textAlign: 'center',
        color: '#635C4E'
    },
    actualDes: {
        position: 'absolute',
        width: 287,
        height: 397,
        left: 40,
        top: 241,
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 23,
        color: '#948B79'
    },
    backButton: {
        position: 'absolute',
        left: 0,
        padding: 30,
    },
    activityTitle: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 30,
        color: '#3A3833',
        fontFamily: 'DMSans_Bold',
        width: width * .7
    },
})
const mapStateToProps = state => {
    return {
        myActivities: state.tracks.myActivities,
    }
}
export default connect(
    mapStateToProps,
    { toggleActivityCompleted }
)(ActivityScreen)