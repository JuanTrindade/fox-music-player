import { StyleSheet } from "react-native";

const AudioTrackStyles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#FFF',
        height: '27%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 13,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#ddd',
    },
    trackButton: {
        borderWidth: 1,
        borderColor: '#ddd', 
        paddingHorizontal: 30,
        height: 70,
        justifyContent: 'center',
    },
    text :{
        fontWeight: 'bold',
    },
    modalTrackTitle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20
    },
    dots:{  
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        padding: 2
    },
    playerControllerContainer :{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        width: '100%',
    }
})

export default AudioTrackStyles;
