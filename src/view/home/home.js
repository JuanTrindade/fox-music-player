import { KeyboardAvoidingView, TextInput, FlatList } from 'react-native';
import HomeStyle from './homeStyles';
import { Audio } from 'expo-av';
import { useState, useMemo } from 'react';
import AudioTracks from '../components/audioTracks';

const tracks = [
    {
        id: 0,
        title: 'Melodia envolvente 4 - DJ Dudah'
    },
    {
        id: 1,
        title: 'Melodia envolvente 5 - DJ Dudah'
    },
    {
        id: 2,
        title: 'Ritmadinha dançante - DJ Gudog'
    },
    {
        id: 3,
        title: 'Automotivo Ritmado - DJ Dudah'
    },
    {
        id: 4,
        title: 'Black Out Days - Phantogram'
    },
]

const Home = ({}) => {
    const [filter, setFilter] = useState('')

    const filteredTracks = useMemo(() => tracks.filter(track => {
            return track.title.toLowerCase().includes(filter.toLowerCase());
        }), 
    [filter])

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
                data={filteredTracks}
                renderItem={({item}) => <AudioTracks tracktitle={item.title}/>}
                keyExtractor={item => item.id}
            />
        </KeyboardAvoidingView>
    );
}

export default Home;