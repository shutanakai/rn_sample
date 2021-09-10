import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/navigator/StackNavigator';

const Navigations = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default Navigations;
