import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBar from '../components/SideBar';
import TodoListScreen from '../screen/TodoListScreen';
import DoneListScreen from '../screen/DoneListScreen';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <SideBar {...props} />}
            initialRouteName="現在のTODO"
        >
            <Drawer.Screen
                name="現在のTODO"
                component={TodoListScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="完了済みのTODO"
                component={DoneListScreen}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
