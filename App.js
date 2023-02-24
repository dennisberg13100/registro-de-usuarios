import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screen/Home';
import Create from './src/screen/Create';
import Read from './src/screen/Read';
import ReadAll from './src/screen/ReadAll';
import Update from './src/screen/Update';
import Delete from './src/screen/Delete';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Create" component={Create} />
                <Stack.Screen name="Read" component={Read} />
                <Stack.Screen name="ReadAll" component={ReadAll} />
                <Stack.Screen name="Update" component={Update} />
                <Stack.Screen name="Delete" component={Delete} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


