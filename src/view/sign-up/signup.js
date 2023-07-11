import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Image, View, Alert } from 'react-native';
import { useState } from 'react';
import SignUpStyle from './styles';
import fox from '../../assets/images/fox.png';
import Api from '../../services/api';

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const createUser = async () => {
        const data = {
            name: username,
            email
        }

        if (!username.trim() || !email.trim()) {
            Alert.alert('ONE OR MORE INPUT ARE BLANK', 'Insert One User-ID, E-mail or Both!');
        } else {
            try {
                await Api.post('create', data);
                Alert.alert('Your account is created');
                navigation.goBack();
    
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <KeyboardAvoidingView style={SignUpStyle.container}>
            <Image 
                source={fox}
                style={{width: '30%', height: 120, marginLeft: '7%'}}
            />
            <TextInput 
                placeholder='User-ID'
                style={SignUpStyle.input}
                onChangeText={setUsername}
                value={username}
            />
            <TextInput 
                placeholder='E-mail'
                style={SignUpStyle.input}
                onChangeText={setEmail}
                keyboardType='email-address'
                value={email}
            />
            <TouchableOpacity style={SignUpStyle.button} onPress={createUser}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>SIGN UP</Text>
            </TouchableOpacity>

            <View style={SignUpStyle.separator}/>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: '#9b59b6', fontWeight: 'bold', marginTop: 15}}>GO BACK</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default SignUp;