import React from 'react';
import { Stack, Alert, CloseIcon, IconButton } from 'native-base';

const StatusAlert = ({ message, setStatus, type }) => {
    return (
        <Stack>
            <Alert
                status={type}
                w="100%"
                action={
                    <IconButton
                        icon={<CloseIcon size="xs" />}
                        onPress={() =>
                            setStatus({
                                status: false,
                                statement: '',
                            })
                        }
                    />
                }
                actionProps={{
                    alignSelf: 'center',
                }}
            >
                <Alert.Icon />
                <Alert.Title flexShrink={1}>{message}</Alert.Title>
            </Alert>
        </Stack>
    );
};

export default StatusAlert;
