import React, { createContext, useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { theme } from './theme';
import AppBar from './src/components/AppBar';
import AddTodoScreen from './src/screen/AddTodoScreen';
import EditTodoScreen from './src/screen/EditTodoScreen';
import MyDrawer from './src/components/MyDrawer';

export const ListContext = createContext();
export const StatusContext = createContext();

export default function App() {
    const initialList = [
        { title: '勉強', isCompleted: true },
        { title: '昼寝', isCompleted: false },
        { title: '洗濯', isCompleted: false },
    ];

    const initialStatus = {
        status: false,
        statement: '',
    };

    const [list, setList] = useState(initialList);
    const [status, setStatus] = useState(initialStatus);

    const Stack = createStackNavigator();
    return (
        <NativeBaseProvider theme={theme}>
            <ListContext.Provider value={[list, setList]}>
                <StatusContext.Provider value={{ status, setStatus }}>
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName="現在のTODO"
                            screenOptions={{
                                gestureDirection: 'horizontal',
                            }}
                        >
                            <Stack.Screen
                                name="現在のTODO"
                                component={MyDrawer}
                                options={{
                                    header: (props) => (
                                        <AppBar title={props.route.name} />
                                    ),
                                    cardStyleInterpolator:
                                        CardStyleInterpolators.forHorizontalIOS,
                                }}
                            />
                            <Stack.Screen
                                name="TODOの追加"
                                component={AddTodoScreen}
                                options={{
                                    header: (props) => (
                                        <AppBar title={props.route.name} />
                                    ),
                                    cardStyleInterpolator:
                                        CardStyleInterpolators.forHorizontalIOS,
                                }}
                            />
                            <Stack.Screen
                                name="TODOの編集"
                                component={EditTodoScreen}
                                options={{
                                    header: (props) => (
                                        <AppBar title={props.route.name} />
                                    ),
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </StatusContext.Provider>
            </ListContext.Provider>
        </NativeBaseProvider>
    );
}
