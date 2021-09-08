import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Box,
    Pressable,
    VStack,
    Text,
    HStack,
    Divider,
    Icon,
} from 'native-base';

const SideBar = (props) => {
    return (
        <DrawerContentScrollView {...props} safeArea>
            <VStack space={6} my={2} mx={1}>
                <Box px={4}>
                    <Text bold color="gray.700">
                        メニュー
                    </Text>
                </Box>
                <VStack divider={<Divider />} space={4}>
                    <VStack space={3}>
                        {props.state.routeNames.map((name, index) => (
                            <Pressable
                                key={name}
                                px={5}
                                py={3}
                                rounded="md"
                                bg={
                                    index === props.state.index
                                        ? 'rgba(6, 182, 22, 0.1)'
                                        : 'transparent'
                                }
                                onPress={(event) => {
                                    props.navigation.navigate(name, {
                                        name: name,
                                    });
                                }}
                            >
                                <HStack space={7} alignItems="center">
                                    <Text
                                        fontWeight={500}
                                        color={
                                            index === props.state.index
                                                ? 'emerald.400'
                                                : 'gray.700'
                                        }
                                    >
                                        {name}
                                    </Text>
                                </HStack>
                            </Pressable>
                        ))}
                    </VStack>
                    <VStack space={5}>
                        <Text
                            fontWeight={500}
                            fontSize={14}
                            px={5}
                            color="gray.500"
                        >
                            ラベル
                        </Text>
                        <VStack space={3}>
                            <Pressable px={5} py={3}>
                                <HStack space={7} alignItems="center">
                                    <Icon
                                        color="gray.500"
                                        size={5}
                                        as={
                                            <MaterialCommunityIcons name="bookmark" />
                                        }
                                    />
                                    <Text color="gray.700" fontWeight={500}>
                                        Family
                                    </Text>
                                </HStack>
                            </Pressable>
                            <Pressable px={5} py={2}>
                                <HStack space={7} alignItems="center">
                                    <Icon
                                        color="gray.500"
                                        size={5}
                                        as={
                                            <MaterialCommunityIcons name="bookmark" />
                                        }
                                    />
                                    <Text color="gray.700" fontWeight={500}>
                                        Friends
                                    </Text>
                                </HStack>
                            </Pressable>
                            <Pressable px={5} py={3}>
                                <HStack space={7} alignItems="center">
                                    <Icon
                                        color="gray.500"
                                        size={5}
                                        as={
                                            <MaterialCommunityIcons name="bookmark" />
                                        }
                                    />
                                    <Text fontWeight={500} color="gray.700">
                                        Work
                                    </Text>
                                </HStack>
                            </Pressable>
                        </VStack>
                    </VStack>
                </VStack>
            </VStack>
        </DrawerContentScrollView>
    );
};

export default SideBar;
