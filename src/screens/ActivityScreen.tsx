import React, {useState, useEffect} from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Image } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { fonts } from '../constants/font';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { toggleActivityCompleted, setActivityImage } from '../actions'
import { checkActivityCompleted } from '../constants/functions';
import * as Haptics from 'expo-haptics';

const {height, width} = Dimensions.get('window');


function ActivityScreen(props) {

    const activity = props.route.params.activity
    const colors = props.route.params.colors


    
    // useEffect(() => {
    //     props.setActivityImage(image)
    // }, [image])

    // const [loaded] = useFonts(fonts);
    // if (!loaded) { return null; }


    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            props.setActivityImage(activity.activityId, result.uri);
        }
      };

      const takeImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            props.setActivityImage(activity.activityId, result.uri);
        }
      };
    

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
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
                <TouchableOpacity onPress={() => {props.toggleActivityCompleted(activity.activityId); Haptics.impactAsync()}}>
                {checkActivityCompleted(props.myActivities, activity.activityId) ? (<>
                    <LinearGradient
                            colors={colors}
                            start={[0,0]}
                            end={[0,1]}
                            style={styles.gradientButton}
                            >
                            <TouchableOpacity onPress={() => {props.toggleActivityCompleted(activity.activityId); Haptics.impactAsync()}}>
                                <Text style={styles.gradientButtonText}>Completed</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                    </>) : (<>
                            <TouchableOpacity style={styles.normalButton} onPress={() => {props.toggleActivityCompleted(activity.activityId); Haptics.impactAsync()}}>
                                <Text style={styles.normalButtonText}>Mark Complete</Text>
                            </TouchableOpacity></>)}
                </TouchableOpacity>
                {/* <Text style={styles.actualDes}>Welcome to Ambi! Let's start with some simple handwriting practice. Grab any piece of paper, and write your name once with your right hand and then again with your left. Don't worry if either look messy — you're on your way to improving your handwriting and strength. Once you're done, take a picture of each name and submit them in the appropriate places below. Don't worry, we'll never save any images you upload — this is so we can score the readability of your writing and track your progress!</Text> */}
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>{activity.activityDescriptionLong}</Text>
                {activity.lessonText && <Text style={styles.lessonText}>{activity.lessonText && activity.lessonText}</Text>}
                <TouchableOpacity style={styles.uploadImageButton} onPress={pickImage}>
                    <Text style={styles.uploadImageButtonText}>{(props.myActivities.filter(i => i.id == activity.activityId)[0] && props.myActivities.filter(i => i.id == activity.activityId)[0].image) ? 'Re-upload Image' : 'Upload Image'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadImageButton} onPress={takeImage}>
                    <Text style={styles.uploadImageButtonText}>Take Photo</Text>
                </TouchableOpacity>
                {(props.myActivities.filter(i => i.id == activity.activityId)[0] && props.myActivities.filter(i => i.id == activity.activityId)[0].image) && <Image source={{ uri: (props.myActivities.filter(i => i.id == activity.activityId)[0] && props.myActivities.filter(i => i.id == activity.activityId)[0].image)}} style={styles.image} />}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FFFCF5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // marginHorizontal: 40,

    },
    contentContainer: {
        backgroundColor: '#FFFCF5',
        // backgroundColor: '#FFEFCE',
        // flex: 1,
        paddingBottom: 40,

        alignItems: 'center',
        // paddingHorizontal: 40,
    },
    headerRow: {
        flexDirection: 'row',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        // flex: 1,
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
    normalButton: {
        marginTop: 15,
        alignSelf: 'center',
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F4F1E9',
        // shadowOffset: {width: 0, height: 5},
        // shadowColor: "#8E3D02",
        // shadowOpacity: 0.2,
        // shadowRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    normalButtonText: {
        fontSize: 18,
        color: '#C7BFB0',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold'
    },
    gradientButton: {
        marginTop: 15,
        alignSelf: 'center',
        // width: 140,
        paddingHorizontal: 20,
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
    descriptionTitle: {
        fontSize: 24,
        color: '#635C4E',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginHorizontal: 40,
    },
    descriptionText: {
        marginTop: 10,
        fontSize: 18,
        color: '#948B79',
        fontFamily: 'DMSans_Regular',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginHorizontal: 40,
    },
    lessonText: {
        marginTop: 10,
        fontSize: 16,
        borderRadius: 15,
        marginVertical: 10,
        color: '#948B79',
        fontFamily: 'DMSans_Medium',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginHorizontal: 40,
        padding: 20,
        backgroundColor: '#F4F1E9',
    },
    uploadImageButton: {
        marginTop: 15,
        alignSelf: 'center',
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F4F1E9',
        // shadowOffset: {width: 0, height: 5},
        // shadowColor: "#8E3D02",
        // shadowOpacity: 0.2,
        // shadowRadius: 10,
        // marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadImageButtonText: {
        fontSize: 18,
        color: '#C7BFB0',
        fontWeight: 'bold',
        fontFamily: 'DMSans_Bold'
    },
    image: {
        marginTop: 20,
        width: width * .7,
        height: width * .7,
        borderRadius: 15,
    },
})
const mapStateToProps = state => {
    return {
        myActivities: state.tracks.myActivities,
    }
}
export default connect(
    mapStateToProps,
    { toggleActivityCompleted, setActivityImage }
)(ActivityScreen)