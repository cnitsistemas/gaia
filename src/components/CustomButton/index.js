
import { Button } from 'native-base';
import React from 'react';

export default function CustomButton(props) {
    const {
        label,
        onPress,
        borderRadius,
        color = "primary"
    } = props;

    return (
        <Button
            borderRadius={borderRadius}
            onPress={onPress}
            colorScheme={color}
            {...props}
        >
            {label}
        </Button>
    );
};