import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './pages/LoginPage';
import LoginOtp from './pages/LoginOtp';
import InputPin from './pages/InputPin';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {

const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginPage' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="LoginOtp" component={LoginOtp} />
          <Stack.Screen name="InputPin" component={InputPin} />
        </Stack.Navigator>
      </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  pageText: {
    
  },
});
