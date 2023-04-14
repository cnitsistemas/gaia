import moment from "moment/moment";
import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { customQuicksandFontBoldUI } from "../../utils/fontsUi";

export default function CustomDatePicker(props) {
    const { label, selectDate, setSelectDate, isDatePickerVisible, setDatePickerVisibility } = props;

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectDate(date)
        //hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.lebel}>{label}</Text>
            <Pressable style={styles.selectPicker} onPress={() => showDatePicker()}>
                {selectDate ? <Text style={styles.value}>{moment(selectDate).format("DD/MM/YYYY")}</Text> : <Text style={styles.value}>Selecione uma data</Text>}
            </Pressable>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    value:{
        fontSize: 16,
        padding: 15
    },
    lebel: {
        ...customQuicksandFontBoldUI,
        fontSize: 14,
        color: "#acacac"
    },
    selectPicker: {
        marginTop: 10,  
        height: 55,
        borderColor: '#ff843a',
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});