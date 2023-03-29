
import React from 'react';
import { Button } from 'react-native-ui-lib';

export default function CustomButton(props) {
    const {
        label,
        onPress,
        borderRadius
    } = props;

    return (
        <Button
            borderRadius={borderRadius}
            label={label}
            onPress={onPress}
            {...props}
        />
    );
};