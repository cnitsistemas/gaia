import { Input, Stack } from 'native-base';
import React from 'react';
import { TextField } from 'react-native-ui-lib';

export default function CustomInput(props) {
    const {
        validate,
        validationMessage,
        maxLength,
        onChangeText,
        enableErrors,
        placeholder,
        size,
        floatingPlaceholder,
        secureTextEntry = false,
        selectionColor
    } = props;

    return (
        <Stack space={2} w="100%" maxW="350px" mx="auto" style={{ marginVertical: 8 }}>
            <Input
                variant="underlined"
                placeholder={placeholder}
                size={size}
                onChangeText={onChangeText}
                {...props}
            />
        </Stack>
    );
};