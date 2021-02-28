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
        <View style={styles.listItemContainer}>
            <View style={styles.leftGroup}>
                <LinearGradient
                colors={item.colors}
                start={[0,0]}
                end={[0,1]}
                style={styles.habitIconContainer}
                >
                    <FontAwesome5 name={item.icon.slug} size={24} color="white" />
                </LinearGradient>
                <View style={styles.habitTextContainer}>
                    <Text style={styles.habitName}>{item.name}</Text>
                </View>
            </View>
            <TouchableOpacity 
                style={[styles.habitCheckboxContainer, styles.habitCheckboxChecked]}
                onPress={() => {props.toggleAddHabit(item); Haptics.impactAsync()}}
                >
                    <LinearGradient
                        colors={item.colors}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.habitCheckboxCheckedFill}
                    >
                        <Octicons 
                            name={item.currentHabit ? "dash" : "plus"} 
                            size={18}
                            color="white" 
                        />
                    </LinearGradient>
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
        height: 75,
        borderRadius: 15,
        margin: width * .025,
        backgroundColor: '#FFFCF5',
        paddingHorizontal: 15,
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
    habitName: {
        fontSize: 18,
        color: '#635C4E',
        fontFamily: 'DMSans_Medium'
    },
    habitDescription: {
        fontSize: 14,
        color: '#635C4E',
        fontFamily: 'DMSans_Regular',
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
    habitStreakContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    habitStreakText: {
        fontSize: 14,
        color: '#C7BFB0',
        fontFamily: 'DMSans_Medium'
    },
    habitStreakIcon: {
        flex: 1, 
        flexDirection: 'row', 
        marginLeft: -1,
        // height: 15,
    },
    habitCheckboxContainer: {
        height: 32,
        width: 32,
        borderRadius: 10,
    },
    habitCheckboxChecked: {
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    habitCheckboxCheckedFill: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
    
})

const mapStateToProps = state => {
    return {
        habits: state.habits.allHabits,
    }
}

export default connect(
    mapStateToProps,
    { toggleAddHabit }
)(HabitCompact)