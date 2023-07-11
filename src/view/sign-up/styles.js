import { StyleSheet } from "react-native";

const SignUpStyle = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    input: {
        backgroundColor: '#FFF',
        width: '55%',
        height: '100%',
        maxHeight: 45,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: '5%'
    },

    separator: {
        marginTop: '5%',
        height: 1,
        width: '75%',
        backgroundColor: '#ddd'
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
        marginTop: 15,
      },
})

export default SignUpStyle;