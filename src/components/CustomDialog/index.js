import React from 'react'
import Dialog from "react-native-dialog";
import Colors from '../../constants/Colors';

export default function CustomDialog({
    visible,
    title,
    content,
    visibleCancel,
    visibleConfirm,
    textCancel,
    textConfirm,
    handleCancelButton,
    handleConfirmButton
}) {
    return (
        <Dialog.Container visible={visible}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>
                {content}
            </Dialog.Description>
            {visibleCancel && <Dialog.Button color={Colors.primary} label={textCancel} onPress={handleCancelButton} />}
            {visibleConfirm && <Dialog.Button color={Colors.primary} label={textConfirm} onPress={handleConfirmButton} />}
        </Dialog.Container>
    )
}