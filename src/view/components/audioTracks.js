import { View, TouchableOpacity, Text, Alert, Modal } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";
import AudioTrackStyles from "./audioTracksStyles";
import Slider from '@react-native-community/slider'

const AudioTracks = ({tracktitle, timer, soundUri}) => {
    const [modalIsVisivle, setModalIsVisible] = useState(false);
    const [pauseTrack, setPauseTrack] = useState(true)
    const [track, setTrack] = useState();
    let totalSeconds = timer;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const playSound = async() => {
        setModalIsVisible(!modalIsVisivle);
        console.log('Loading Sound...');
        try {
            const { sound } = await Audio.Sound.createAsync(
                {
                    uri: soundUri,
                },
            );
            setTrack(sound);
    
            console.log('Playng');
            await sound.playAsync();
        } catch (error) {
            console.log(error);
        }
    }

    const pauseSound = () => {
        console.log("Pausing")
        console.log(pauseTrack)
        setPauseTrack(!pauseTrack) 
        
        pauseTrack === true ? track.pauseAsync() : track.playAsync() 
    }

    return(
        <View style={AudioTrackStyles.container}>
            <TouchableOpacity 
                onPress={(playSound)}
                style={AudioTrackStyles.trackButton}
            >
                <Text style={AudioTrackStyles.text}>{tracktitle}</Text>
                <Text>{minutes}:{seconds}</Text>
                <TouchableOpacity style={AudioTrackStyles.dots} onPress={() => Alert.alert('Three dots')}>
                    <Entypo 
                        name='dots-three-vertical'
                        size={20}
                        color='black'
                        style={AudioTrackStyles.dots}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
            <Modal
                animationType='slide'
                visible={modalIsVisivle}
                transparent={true}
                onRequestClose={() => {
                    setModalIsVisible(!modalIsVisivle);
                    track.stopAsync();
                }}
            >
                <View style={AudioTrackStyles.modalContainer}>
                    <Text style={AudioTrackStyles.modalTrackTitle}>{tracktitle}</Text>
                    <Text>{minutes}:{seconds}</Text>
                    <Slider 
                        style={{width: '100%', height: 40}}
                        minimumValue={0}
                        maximumValue={totalSeconds}
                        minimumTrackTintColor="#9b59b6"
                        maximumTrackTintColor="#DDD"
                    />
                    <View style={AudioTrackStyles.playerControllerContainer}>
                        <TouchableOpacity style={{marginHorizontal: 15}}>
                            <Entypo 
                                size={30}
                                color="black"
                                name="controller-jump-to-start" 
                                onPress={() => track.replayAsync()}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo 
                                onPress={pauseSound} 
                                size={30}
                                color="black"
                                name={pauseTrack === false ? "controller-play" : "controller-paus"} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginHorizontal: 15}}>
                            <Entypo 
                                size={30}
                                color="black"
                                name="controller-next" 
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default AudioTracks