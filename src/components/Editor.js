import React, { useContext, useState } from 'react';
import {
    Center,
    Input,
    IconButton,
    Icon,
    VStack,
    Collapse,
    Text,
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

import StatusAlert from './StatusAlert';
import { ListContext, StatusContext } from '../ContextContainer';
import { useNavigation } from '@react-navigation/native';

const Editor = ({ name, item }) => {
    const navigation = useNavigation();
    const initialError = {
        status: false,
        statement: '',
    };

    const initialValue = item ? item.title : '';

    const [inputValue, setInputValue] = useState(initialValue);
    const [hasError, setHasError] = useState(initialError);

    const [list, setList] = useContext(ListContext);
    const { setStatus } = useContext(StatusContext);

    const sameTitleError = () => {
        setHasError({
            status: true,
            statement:
                '同じTODOは追加できません(完了済みからも削除してください)',
        });
    };

    const emptyTitleError = () => {
        setHasError({
            status: true,
            statement: 'TODOが設定されていません',
        });
    };

    const doProcess = (title) => {
        const hasSameTitle = list.some((l) => l.title == title);
        const isEmptyTitile = title === '';
        if (!hasSameTitle && !isEmptyTitile) {
            item ? editTodo(title) : addTodo(title);
            setStatus(
                item
                    ? {
                          status: true,
                          statement: 'TODOが編集されました',
                      }
                    : {
                          status: true,
                          statement: 'TODOが追加されました',
                      }
            );
            navigation.navigate('現在のTODO');
        } else if (hasSameTitle) {
            sameTitleError();
        } else if (isEmptyTitile) {
            emptyTitleError();
        }
    };

    const addTodo = (title) => {
        setList([
            ...list,
            {
                title: title,
                isCompleted: false,
            },
        ]);
    };

    const editTodo = (title) => {
        const tempList = list.slice();
        const index = tempList.findIndex((l) => l.title === item.title);
        tempList[index].title = title;
        setList(tempList);
    };

    return (
        <Center flex={1}>
            <Collapse isOpen={hasError.status}>
                <StatusAlert
                    message={hasError.statement}
                    setStatus={setHasError}
                    type="error"
                />
            </Collapse>
            <VStack space={4} flex={1} w="80%" mt={4}>
                <Text fontSize={20} fontWeight="bold" mb={1}>
                    {name}
                </Text>
                <Input
                    variant="filled"
                    InputRightElement={
                        <IconButton
                            icon={
                                <Icon as={FontAwesome5} name="plus" size={4} />
                            }
                            colorScheme="emerald"
                            onPress={() => {
                                doProcess(inputValue);
                            }}
                            mr={1}
                        />
                    }
                    onChangeText={(v) => setInputValue(v)}
                    onSubmitEditing={() => {
                        doProcess(inputValue);
                    }}
                    value={inputValue}
                    placeholder="Todoを追加"
                />
            </VStack>
        </Center>
    );
};

export default Editor;
