import React from 'react';
import { HStack, IconButton, Icon, Text, Box, StatusBar } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const AppBar = ({ title }) => {
    const navigation = useNavigation();
    const isTop = title !== 'TODOの追加' && title !== 'TODOの編集';
    return (
        <>
            <StatusBar barStyle="light-content" />

            <Box safeAreaTop backgroundColor="emerald.400" />

            <HStack
                bg="emerald.400"
                px={1}
                py={3}
                justifyContent="space-between"
                alignItems="center"
            >
                <HStack space={4} alignItems="center">
                    <IconButton
                        icon={
                            isTop ? (
                                <Icon
                                    size="sm"
                                    as={<MaterialIcons name="menu" />}
                                    color="white"
                                />
                            ) : (
                                <Icon
                                    size="sm"
                                    as={<MaterialIcons name="arrow-back" />}
                                    color="white"
                                />
                            )
                        }
                        onPress={
                            isTop
                                ? () =>
                                      navigation.dispatch(
                                          DrawerActions.toggleDrawer()
                                      )
                                : () => navigation.goBack()
                        }
                    />
                    <Text color="white" fontSize={20} fontWeight="bold">
                        TODOLIST
                    </Text>
                </HStack>
                <HStack space={2}>
                    <IconButton
                        onPress={() => navigation.navigate('TODOの追加')}
                        icon={
                            isTop ? (
                                <Icon
                                    as={FontAwesome5}
                                    name="plus"
                                    size={4}
                                    color="#ffffff"
                                />
                            ) : undefined
                        }
                        mr={4}
                    />
                </HStack>
            </HStack>
        </>
    );
};

export default AppBar;
