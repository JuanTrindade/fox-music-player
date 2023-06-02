import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './view/login/login';
import Home from './view/home/home';

const Routes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Login'
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={{
                    headerShown: true, 
                    headerTintColor: '#FFF', 
                    headerStyle: {
                        backgroundColor: '#9b59b6'
                    },
                    headerTitle: 'Fox Player'
                }}
            />
        </Stack.Navigator>
    );
}

export default Routes;