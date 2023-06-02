import { View, TouchableOpacity, Text, Alert } from "react-native";
import AudioTrackStyles from "./audioTracksStyles";

const AudioTracks = ({tracktitle}) => {
    const openTrack = () => {
        Alert.alert(tracktitle)
    }

    return(
        <View style={AudioTrackStyles.container}>
            <TouchableOpacity 
                onPress={openTrack}
                style={AudioTrackStyles.trackButton}
            >
                <Text style={AudioTrackStyles.text}>{tracktitle}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AudioTracks