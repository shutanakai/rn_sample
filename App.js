import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import ContextProvider from './src/ContextProvider';
import StackNavigator from './src/navigator/StackNavigator';

export default function App() {
    return (
        <NativeBaseProvider>
            <ContextProvider>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </ContextProvider>
        </NativeBaseProvider>
    );
}
