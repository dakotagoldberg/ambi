import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import HabitCompact from '../components/HabitCompact';
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';
import habits from '../reducers/habits';
const {height, width} = Dimensions.get('window');

function TrackOverviewScreen(props) {

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }
    
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => props.navigation.goBack()}
                >
                    <MaterialIcons name="arrow-back-ios" size={30} color="#3A3833" />
                </TouchableOpacity>
                <Text style={styles.titleText}>{props.route.params.name}</Text>
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
    sectionHeader: {
        fontSize: 24,
        color: '#635C4E',
        fontFamily: 'DMSans_Medium',
        marginTop: 25,
        marginLeft: width * .04,
        marginBottom: 3,
    },
})
const mapStateToProps = state => {
    return {
        
    }
}
export default connect(
    mapStateToProps,
    {}
)(TrackOverviewScreen)