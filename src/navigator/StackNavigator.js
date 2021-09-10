import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import AppBar from '../components/AppBar';
import AddTodoScreen from '../screen/AddTodoScreen';
import EditTodoScreen from '../screen/EditTodoScreen';
import DrawerNavigator from './DrawerNavigator';

const StackNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="現在のTODO"
            screenOptions={{
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen
                name="現在のTODO"
                component={DrawerNavigator}
                options={{
                    header: (props) => <AppBar title={props.route.name} />,
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }}
            />
            <Stack.Screen
                name="TODOの追加"
                component={AddTodoScreen}
                options={{
                    header: (props) => <AppBar title={props.route.name} />,
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }}
            />
            <Stack.Screen
                name="TODOの編集"
                component={EditTodoScreen}
                options={{
                    header: (props) => <AppBar title={props.route.name} />,
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
