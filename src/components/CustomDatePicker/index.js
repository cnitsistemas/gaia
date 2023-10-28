import moment from "moment/moment";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function CustomDatePicker(props) {
  const {
    label,
    selectDate,
    setSelectDate,
    isDatePickerVisible,
    setDatePickerVisibility,
  } = props;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setSelectDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.lebel}>{label}</Text>
      <Pressable style={styles.selectPicker} onPress={() => showDatePicker()}>
        {selectDate ? (
          <Text style={styles.value}>{moment(selectDate).format("HH:mm")}</Text>
        ) : (
          <Text style={styles.value}>Selecione um horário</Text>
        )}
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        date={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    padding: 15,
  },
  lebel: {
    fontSize: 14,
    marginLeft: 15,
    color: "#acacac",
  },
  selectPicker: {
    marginBottom: 10,
    height: 55,
    borderColor: "#32386f",
    borderBottomWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
