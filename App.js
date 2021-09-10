import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import ContextContainer from './src/ContextContainer';
import StackNavigator from './src/navigator/StackNavigator';

export default function App() {
    return (
        <NativeBaseProvider>
            <ContextContainer>
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </ContextContainer>
        </NativeBaseProvider>
    );
}
