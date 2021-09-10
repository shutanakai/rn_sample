import React from 'react';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';

import ContextProvider from './src/ContextProvider';
import Navigations from './src/Navigations';

export default function App() {
    return (
        <NativeBaseProvider>
            <ContextProvider>
                <Navigations />
            </ContextProvider>
        </NativeBaseProvider>
    );
}
