import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SectionList, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';
import { tracks } from '../constants/tracks'
import { LinearGradient } from 'expo-linear-gradient';
import Activity from '../components/Activity';
import { toggleTrackSubscription } from '../actions'
const {height, width} = Dimensions.get('window');


function TrackOverviewScreen(props) {

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }
    
    const track = tracks.filter(track => track.id == props.route.params.name)[0]

    // console.log(props.trackSubscriptions)

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
                        {track.name}
                    </Text>
                </View>
                <Text style={styles.descriptionText}>
                        {track.descriptionShort}
                </Text>
                <TouchableOpacity onPress={() => props.toggleTrackSubscription(track.id)}>
                    <LinearGradient
                            colors={props.trackSubscriptions.includes(track.id) ? [track.colors[0] + '50', track.colors[1] + '50'] : track.colors}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.subscribeButton}
                            >
                            <TouchableOpacity onPress={() => props.toggleTrackSubscription(track.id)}>
                            <Text style={styles.subscribeButtonText}>{props.trackSubscriptions.includes(track.id) ? 'Subscribed' : 'Subscribe'}</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{marginTop: 50,}}
                data={track.activities}
                keyExtractor={(item: any) => item.activityId}
                renderItem={({item}) => (
                    <Activity navigation={props.navigation} colors={track.colors} activity={item}/>
                )}
                ListFooterComponent={() => (
                    <View style={styles.listItemContainer}><Text style={styles.listEndText}>More Coming Soon!</Text></View>
                )}
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
})
const mapStateToProps = state => {
    return {
        trackSubscriptions: state.tracks.trackSubscriptions 
    }
}
export default connect(
    mapStateToProps,
    { toggleTrackSubscription }
)(TrackOverviewScreen)