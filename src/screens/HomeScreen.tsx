import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons'; 
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
const {height, width} = Dimensions.get('window');

function HomeScreen(props) {

    
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>Today</Text>
                <Text style={styles.wordCountText}>X activities, {props.habits.length} habits</Text>
                <View style={styles.achievementsPanel}>
                    <LinearGradient
                        colors={['#FDBC0C', '#FD800C']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.achievementsPanelIconContainer}
                        >
                            <FontAwesome5 name="medal" size={24} color="white" />
                    </LinearGradient>
                    <Text style={styles.achievementsPanelText}>Achievements</Text>
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
                data={props.habits}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.listItemContainer}>
                        <LinearGradient
                        colors={['#FDBC0C', '#FD800C']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.habitIconContainer}
                        >
                            <FontAwesome5 name={item.icon.slug} size={24} color="white" />
                        </LinearGradient>
                        <View style={styles.habitTextContainer}>
                            <Text style={styles.habitName}>{item.name}</Text>
                            <Text style={styles.habitDescription}>With your left hand</Text>
                            <View style={styles.habitInfoContainer}>
                                <View style={styles.habitLabelContainer}>
                                    <Text style={styles.habitLabelContainerText}></Text>
                                </View>
                                <View style={styles.habitStreakContainer}>
                                    <Text style={styles.habitLabelContainerText}></Text>
                                    <MaskedView
                                        style={{ flex: 1, flexDirection: 'row', height: 24 }}
                                        maskElement={
                                        <View
                                            style={{
                                            backgroundColor: 'transparent',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            }}>
                                            <FontAwesome5 name="fire" size={24} color="white" />
                                        </View>
                                        }>
                                        <LinearGradient
                                        colors={['#FDBC0C', '#FD800C']}
                                        start={[0,0]}
                                        end={[0,1]}
                                        style={{flex:1}}
                                        />
                                    </MaskedView>
                                </View>
                            </View>
                        </View>
                        <View style={styles.habitCheckboxContainer}>

                        </View>
                    </View>
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
        fontWeight: 'bold',
    },
    wordCountText: {
        margin: 5,
        fontSize: 20,
        color: '#635C4E',
        fontWeight: '500',
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
        marginLeft: -width * .03,
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
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * .85,
        height: width * .25,
        borderRadius: 15,
        margin: width * .025,
        backgroundColor: '#FFFCF5',
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
        habits: state.habits.allHabits,
    }
}
export default connect(
    mapStateToProps,
    {}
)(HomeScreen)