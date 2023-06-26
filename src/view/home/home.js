import { KeyboardAvoidingView, TextInput, FlatList, Text } from 'react-native';
import HomeStyle from './homeStyles';
import * as MediaLibrary from 'expo-media-library'
import { useState, useMemo, useEffect } from 'react';
import AudioTracks from '../components/audioTracks';

const Home = ({}) => {
    const [filter, setFilter] = useState('');
    const [audio, setAudio] = useState([]);

    const getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync();
        permission.granted ? console.log('Permission is already granted') : await MediaLibrary.requestPermissionsAsync();
    }

    const getAudio = async () => {
        try {
            const media = await MediaLibrary.getAssetsAsync({
                album: '1497092612',
                mediaType: 'audio',
            });
    
            setAudio(media.assets);   
        } catch (error) {
            console.log(error)
        }
    }

    let filteredTracks = useMemo(() => audio.filter(track => {
        return track.filename.toLowerCase().includes(filter.toLowerCase());
    }), 
    [filter])

    useEffect(() => {
        getPermission();
        getAudio();
    } ,[])

    return(
        <KeyboardAvoidingView
            behavior='height'
            style={HomeStyle.container}
        >
            <TextInput 
                placeholder='Find Your Track' 
                style={HomeStyle.inputTrack}
                onChangeText={setFilter}
                value={filter}
                autoCapitalize='none'
            />
            <FlatList
                extraData={audio}
                data={audio}
                renderItem={({item}) => <AudioTracks tracktitle={item.filename} timer={item.duration} soundUri={item.uri}/>}
                keyExtractor={item => item.id}
            />
        </KeyboardAvoidingView>
    );
}

export default Home;