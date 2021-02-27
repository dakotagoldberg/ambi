import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import Habit from '../components/Habit';
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';
const {height, width} = Dimensions.get('window');

function HomeScreen(props) {

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }
    
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>Today</Text>
                <Text style={styles.wordCountText}>X activities, {props.habits.length} habits</Text>
                <View style={styles.achievementsPanel}>
                    <View style={styles.achievementsPanelLeft}>
                        <LinearGradient
                            colors={['#FDBC0C', '#FD800C']}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.achievementsPanelIconContainer}
                            >
                                <MaterialCommunityIcons name="rocket-launch" size={24} color="white" />
                        </LinearGradient>
                        <Text style={styles.achievementsPanelText}>My Progress</Text>
                    </View>
                        <MaterialIcons name="arrow-forward-ios" size={26} color="#635C4E" />
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('EditHabits')}>
                <LinearGradient
                        colors={['#FDBC0C', '#FD800C']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.editHabitsButton}
                        >
                            <TouchableOpacity onPress={() => props.navigation.navigate('EditHabits')}>
                            <Text style={styles.editHabitsButtonText}>Edit Habits</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{marginTop: 50,}}
                data={props.habits.filter(habit => habit.currentHabit)}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Habit habit={item}/>
                )}
            />
            <View>
            
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEFCE',
        alignItems: 'center',
        // paddingBottom: 150,
        // justifyContent: 'center'
    },
    topContainer: {
        height: 280,
        width: width,
        borderRadius: 30,
        paddingTop: 30,
        backgroundColor: '#FFFCF5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 30,
        color: '#3A3833',
        fontFamily: 'DMSans_Bold'
    },
    wordCountText: {
        margin: 5,
        fontSize: 20,
        color: '#635C4E',
        fontWeight: '500',
        fontFamily: 'DMSans_Medium'
    },
    achievementsPanel: {
        marginTop: 10,
        width: width * .85,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#FFF5DF",
        paddingHorizontal: 17.5,
        paddingVertical: 10,
        borderRadius: 15,
    },
    achievementsPanelLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    achievementsPanelIconContainer: {
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
    achievementsPanelText: {
        fontSize: 24,
        color: '#635C4E',
        fontWeight: '500',
        fontFamily: 'DMSans_Medium',
        marginLeft: 15,
    },
    editHabitsButton: {
        position: 'absolute',
        marginTop: 20,
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
    editHabitsButtonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold'
    },
})
const mapStateToProps = state => {
    return {
        habits: state.habits.allHabits,
    }
}
export default connect(
    mapStateToProps,
    {}
)(HomeScreen)