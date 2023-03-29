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
        floatingPlaceholder,
        secureTextEntry = false,
        selectionColor
    } = props;

    return (
        <TextField
            placeholder={placeholder}
            floatingPlaceholder={floatingPlaceholder}
            onChangeText={onChangeText}
            enableErrors={enableErrors}
            validate={validate}
            validationMessage={validationMessage}
            maxLength={maxLength}
            style={{ height: 40, width: "100%", borderColor: 'gray', borderBottomWidth: 1, borderBottomColor: "#ff843a" }}
            secureTextEntry={secureTextEntry}
            selectionColor={selectionColor}
            {...props}
        />
    );
};