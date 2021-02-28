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
                <Text>{checkActivityCompleted(props.myActivities, activity.activityId) ? 'Completed' : 'Mark Complete'}</Text>
            </TouchableOpacity>
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