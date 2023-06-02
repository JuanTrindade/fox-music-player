import { Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useState } from 'react';
import stylesLogin from './styles';
import fox from '../../assets/images/fox.png';

const Login = ({ navigation }) => {
  const [userId, setUserId] = useState('');

  const userExists = (id) => {
    id = userId;
    if (id === 'JuanTR2') {
      navigation.navigate('Home', {id});

    } else {
      Alert.alert('Acesso negado');
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
        onPress={userExists}
      >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>ENTER</Text>
      </TouchableOpacity>

      <View style={stylesLogin.separator}/>
      
      <TouchableOpacity style={stylesLogin.linkId} onPress={() => Alert.alert('Work In Progress...')}>
        <Text style={{color: '#9b59b6', fontWeight: 'bold'}}>CREATE ID</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Login;