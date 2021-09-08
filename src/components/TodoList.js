import React, { useContext, useState, useEffect } from 'react';
import {
    IconButton,
    Checkbox,
    Text,
    VStack,
    HStack,
    Heading,
    Icon,
    Center,
    Collapse,
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';

import { ListContext, StatusContext } from '../../App';
import StatusAlert from './StatusAlert';

const TodoList = ({ completedFlag, name }) => {
    const [list, setList] = useContext(ListContext);
    const { status, setStatus } = useContext(StatusContext);
    const [currentList, setCurrentList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const targetList = list.filter((l) => l.isCompleted === completedFlag);
        setCurrentList(targetList);
    }, [list]);

    const handleDelete = (title) => {
        const tempList = list.filter((item) => item.title !== title);
        setList(tempList);
        setStatus({
            status: true,
            statement: `${title}を削除しました`,
        });
    };

    const handleStatusChange = (title) => {
        const tempList = list.map((item) => {
            return item.title !== title
                ? item
                : {
                      ...item,
                      isCompleted: !item.isCompleted,
                  };
        });
        setList(tempList);
    };

    return (
        <Center flex={1}>
            <Collapse isOpen={status.status}>
                <StatusAlert
                    message={status.statement}
                    setStatus={setStatus}
                    type="success"
                />
            </Collapse>

            <VStack space={4} flex={1} w="90%" mt={4}>
                <Heading color="emerald.400">{name}</Heading>
                <VStack>
                    {currentList.length > 0 ? (
                        currentList.map((item, itemIndex) => (
                            <HStack
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                key={item.title + itemIndex.toString()}
                            >
                                <Checkbox
                                    colorScheme="emerald"
                                    isChecked={item.isCompleted}
                                    onChange={() =>
                                        handleStatusChange(item.title)
                                    }
                                    value={item.title}
                                >
                                    <Text
                                        mx={2}
                                        strikeThrough={item.isCompleted}
                                    >
                                        {item.title}
                                    </Text>
                                </Checkbox>
                                <HStack>
                                    {!completedFlag && (
                                        <IconButton
                                            icon={
                                                <Icon
                                                    as={FontAwesome5}
                                                    name="edit"
                                                    size={5}
                                                />
                                            }
                                            onPress={() =>
                                                navigation.navigate(
                                                    'TODOの編集',
                                                    {
                                                        item: item,
                                                    }
                                                )
                                            }
                                        />
                                    )}
                                    <IconButton
                                        icon={
                                            <Icon
                                                as={FontAwesome5}
                                                name="trash"
                                                size={5}
                                            />
                                        }
                                        onPress={() =>
                                            Alert.alert(
                                                '本当に削除しますか',
                                                `${item.title}を削除します`,
                                                [
                                                    {
                                                        text: 'キャンセル',
                                                        style: 'cancel',
                                                    },
                                                    {
                                                        text: 'OK',
                                                        onPress: () =>
                                                            handleDelete(
                                                                item.title
                                                            ),
                                                    },
                                                ]
                                            )
                                        }
                                    />
                                </HStack>
                            </HStack>
                        ))
                    ) : (
                        <HStack>
                            <Text mx={2}>対象のTODOがありません</Text>
                        </HStack>
                    )}
                </VStack>
            </VStack>
        </Center>
    );
};

export default TodoList;
