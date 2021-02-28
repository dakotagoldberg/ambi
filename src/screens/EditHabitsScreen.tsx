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

function EditHabitsScreen(props) {

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
                <Text style={styles.titleText}>Edit Habits</Text>
            </View>   
            <SectionList
                // style={{marginTop: 25,}}
                sections={[{title: 'My Habits', data: props.habits.filter(habit => habit.currentHabit)}, {title: 'Habit Library', data: props.habits.filter(habit => !habit.currentHabit)}]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <HabitCompact habit={item}/>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
            />   
            {/* <FlatList
                style={{marginTop: 50,}}
                data={props.habits}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Habit habit={item}/>
                )}
            /> */}
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
        habits: state.habits.allHabits,
    }
}
export default connect(
    mapStateToProps,
    {}
)(EditHabitsScreen)