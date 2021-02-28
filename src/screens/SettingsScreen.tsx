import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SectionList, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';
import { tracks } from '../constants/tracks'
import { LinearGradient } from 'expo-linear-gradient';
import Activity from '../components/Activity';
import { setHandToStrengthen } from '../actions'
const {height, width} = Dimensions.get('window');


function SettingsScreen(props) {

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }
    

    // console.log(props.trackSubscriptions)

    return (
        <View style={styles.container}>
            <View style={styles.topPanel}>
                <View style={styles.headerRow}>
                    
                    <Text style={styles.titleText}>
                        Settings
                    </Text>
                </View>
                <Text style={styles.descriptionText}>
                Customize your experience
                </Text>
                <TouchableOpacity onPress={() => alert('Interactive Tutorial Coming Soon')}>
                    <LinearGradient
                            colors={['#FDBC0C', '#FD800C']}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.subscribeButton}
                            >
                            <TouchableOpacity onPress={() => alert('Interactive Tutorial Coming Soon')}>
                            <Text style={styles.subscribeButtonText}>Tutorial</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={styles.titleTextS}>
                Non-Dominant Hand
                    </Text>
                <Text style={styles.descriptionTextS}>
                To strengthen with Ambi!
                </Text>
                <View style={styles.optionContainer}>
                <TouchableOpacity onPress={() => props.setHandToStrengthen('left')} style={[styles.handContainer, {borderColor: '#FDBC0C', borderWidth: props.hand == 'left' ? 3 : 0}]}>
                <LinearGradient
                colors={['#FDBC0C', '#FD800C']}
                start={[0,0]}
                end={[0,1]}
                style={styles.habitIconContainer}
                >
                    <MaterialCommunityIcons name='hand-left' size={24} color="white" />
                </LinearGradient>
                <Text style={[styles.titleTextS, {textAlign:'center', fontSize: 22, marginHorizontal: 10, marginTop: 10, fontFamily: 'DMSans_Medium',}]}>
                Left Hand
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setHandToStrengthen('right')} style={[styles.handContainer, {borderColor: '#FF7F77', borderWidth: props.hand == 'right' ? 3 : 0}]}>
                <LinearGradient
                colors={['#FF7F77', '#FC3DD2']}
                start={[0,0]}
                end={[0,1]}
                style={styles.habitIconContainer}
                >
                    <MaterialCommunityIcons name='hand-right' size={24} color="white" />
                </LinearGradient>
                <Text style={[styles.titleTextS, {textAlign:'center', fontSize: 22, marginHorizontal: 10, marginTop: 10, fontFamily: 'DMSans_Medium',}]}>
                Right Hand
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
            
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
    titleTextS: {
        fontSize: 24,
        color: '#635C4E',
        fontFamily: 'DMSans_Bold'
    },
    descriptionTextS: {
        marginBottom: 20,
        fontSize: 16,
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
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flex: 1,
    },
    handContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFCF5',
        height: 160,
        width: 134,
        marginHorizontal: 10,
        borderRadius: 15,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    habitIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 44,
        width: 44,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
})
const mapStateToProps = state => {
    return {
        hand: state.settings.handToStrengthen,
    }
}
export default connect(
    mapStateToProps,
    { setHandToStrengthen }
)(SettingsScreen)