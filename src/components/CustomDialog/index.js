import React from 'react';
import { Button, Modal } from "native-base";

export default function CustomDialog({
    visible,
    setVisible,
    title,
    content,
    visibleCancel,
    visibleConfirm,
    textCancel,
    textConfirm,
    handleCancelButton,
    handleConfirmButton,
    size, 
    closeOnOverlayClick
}) {
    return (
        <Modal isOpen={visible} onClose={() => setVisible(false)} size={size} closeOnOverlayClick={closeOnOverlayClick}>
            <Modal.Content maxWidth="350" >
                <Modal.CloseButton />
                <Modal.Header>{title}</Modal.Header>
                <Modal.Body>
                    {content}
                </Modal.Body>
                <Modal.Footer>
                    {visibleCancel && <Button flex="1" onPress={handleCancelButton}>
                        {textCancel}
                    </Button>}
                    {visibleConfirm && <Button flex="1" onPress={handleConfirmButton}>
                        {textConfirm}
                    </Button>}
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}