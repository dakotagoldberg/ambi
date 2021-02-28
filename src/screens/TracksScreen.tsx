import React from 'react'
import { View, Dimensions, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
const {height, width} = Dimensions.get('window');
import { FontAwesome5, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';


function TracksScreen(props) {

    const [loaded] = useFonts(fonts);
    if (!loaded) { return null; }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.titleText}>Activity Tracks</Text>
                    <Text style={styles.subtitleText}>Improve a wide range of skills</Text>

                <TouchableOpacity style={styles.trackPanel} onPress={() => props.navigation.navigate('TrackOverview')}>
                <LinearGradient
                        colors={['#FDBC0C', '#FD800C']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.banner}
                    />
                    <LinearGradient
                            colors={['#FDBC0C', '#FD800C']}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.collectionsPanelIconContainer}
                            >
                                <FontAwesome5 name="book" size={24} color="white" />
                    </LinearGradient>
                    <Text style={styles.trackTitle}>Handwriting</Text>
                    <Text style={styles.trackSubTitle}>Improve speed and legibility</Text>
                    
                    <View ></View>
                    <LinearGradient
                        colors={['#FDBC0C', '#FD800C']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.gradientButton}
                        >
                            <TouchableOpacity onPress={() => props.navigation.navigate('TrackOverview')}>
                            <Text style={styles.gradientButtonText}>View Track</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.trackPanel} onPress={() => props.navigation.navigate('TrackOverview')}>
                <LinearGradient
                        colors={['#FF7F77', '#FC3DD2']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.banner}
                    />
                    <LinearGradient
                            colors={['#FF7F77', '#FC3DD2']}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.collectionsPanelIconContainer}
                            >
                                <MaterialCommunityIcons name="gesture-tap" size={27} color="white" />
                    </LinearGradient>
                    <Text style={styles.trackTitle}>Tap Games</Text>
                    <Text style={styles.trackSubTitle}>Tap, drag, and trace to improve fine motor skills</Text>
                    <LinearGradient
                        colors={['#FF7F77', '#FC3DD2']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.gradientButton}
                        >
                            <TouchableOpacity onPress={() => props.navigation.navigate('TrackOverview')}>
                            <Text style={styles.gradientButtonText}>View Track</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.trackPanel} onPress={() => props.navigation.navigate('TrackOverview')}>
                <LinearGradient
                        colors={['#09C4FF', '#096BFF']}
                        start={[0,0]}
                        end={[0,1]}
                        style={styles.banner}
                    />
                    <LinearGradient
                            colors={['#09C4FF', '#096BFF']}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.collectionsPanelIconContainer}
                            >
                                <MaterialIcons name="sports-football" size={24} color="white" />
                    </LinearGradient>
                    <Text style={styles.trackTitle}>Sports</Text>
                    <Text style={styles.trackSubTitle}>Improve athletic strength and accuracy</Text>
                    <LinearGradient
                        colors={['#09C4FF', '#096BFF']}
                        start={[0,0]}
                        end={[0,1]}
                        style={[styles.gradientButton]}
                        >
                            <TouchableOpacity onPress={() => props.navigation.navigate('TrackOverview')}>
                            <Text style={styles.gradientButtonText}>View Track</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEFCE',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // paddingBottom: 150,
    },
    scrollContainer: {
        // flex: 1,
        backgroundColor: '#FFEFCE',
        alignItems: 'center',
        // justifyContent: 'center',
        // marginBottom: 150,
        // paddingBottom: 150,
        // justifyContent: 'center'
    },
    titleText: {
        marginTop: 75,
        fontSize: 30,
        color: '#3A3833',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold'
    },
    subtitleText: {
        marginTop: 5,
        fontSize: 20,
        color: '#635C4E',
        fontWeight: '500',
        marginBottom: 15,
        fontFamily: 'DMSans_Medium'
    },
    trackPanel: {
        // height: 220,
        marginVertical: 10,
        width: width * .85,
        borderRadius: 15,
        backgroundColor: '#FFFCF5',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    trackTitle: {
        // marginTop: 75,
        fontSize: 24,
        color: '#635C4E',
        fontWeight: '500',
        fontFamily: 'DMSans_Medium'
        
    },
    trackSubTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#948B79',
        fontWeight: '400',
        fontFamily: 'DMSans_Regular'
    },
    collectionsPanelIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 44,
        width: 44,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginBottom: 15,
        marginTop: 20,
    },
    gradientButton: {
        marginTop: 15,
        alignSelf: 'center',
        width: 140,
        height: 40,
        borderRadius: 20,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#8E3D02",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradientButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold'
    },
    banner: {
        width: 230,
        height: 28,
        opacity: .3,
        position: 'absolute',
        top: 34,
        borderRadius: 30, 
    },
})
const mapStateToProps = state => {
    return {
        
    }
}
export default connect(
    mapStateToProps,
    {}
)(TracksScreen)