import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputTrack: {
        width: '100%',
        backgroundColor: '#fff',
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        backgroundColor: '#8e44ad',
        width: '55%',
        height: '100%',
        maxHeight: 40,
        paddingHorizontal: 15,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 20
      },
})

export default HomeStyle;