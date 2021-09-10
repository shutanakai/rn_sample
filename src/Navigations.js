import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './navigator/StackNavigator';

const Navigations = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default Navigations;
