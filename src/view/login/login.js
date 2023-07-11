import { Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useEffect, useState } from 'react';
import stylesLogin from './styles';
import fox from '../../assets/images/fox.png';
import Api from '../../services/api';

const Login = ({ navigation }) => {
  const [userId, setUserId] = useState('');

  const signInUser = async () => {
    const data = {
      name: userId
    };

    const response = await Api.post('sessions', data);

    if (userId === response.data[0].name) { 
        navigation.navigate('Home', {userId});

    } else if (!userId.trim()){
      Alert.alert('ACCESS DENIED!', 'Insert Your User-ID');

    } else {
      Alert.alert('ACCESS DENIED!', 'The User-ID Don´t Exists!');

    }
  }

  return (
    <KeyboardAvoidingView 
      style={stylesLogin.container}
      behavior='height'
    >
      <Image source={fox} style={stylesLogin.iconImage}/>
      <TextInput 
        placeholder='User-ID' 
        style={stylesLogin.input}
        onChangeText={setUserId}
        value={userId}
      />
      
      <TouchableOpacity 
        style={stylesLogin.button}
        onPress={signInUser}
      >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>ENTER</Text>
      </TouchableOpacity>

      <View style={stylesLogin.separator}/>
      
      <TouchableOpacity style={stylesLogin.linkId} onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: '#9b59b6', fontWeight: 'bold'}}>CREATE ID</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Login;