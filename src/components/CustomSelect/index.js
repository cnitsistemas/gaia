import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { customQuicksandFontBoldUI } from '../../utils/fontsUi';

export default function CustomSelect(props) {
    const { items, label, selectedItems, setSelectedItems } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.lebel}>{label}</Text>
            <View style={styles.select}>
                <Picker
                    selectedValue={selectedItems}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedItems(itemValue)
                    }>
                    {items && items.length > 0 && items.map(item => {
                        return <Picker.Item key={item.id} label={item.nome} value={item} />
                    })}
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    lebel: {
        // ...customQuicksandFontBoldUI,
        fontSize: 14,
        marginLeft: 15,
        color: "#acacac"
    },
    select: {
        marginBottom: 10,  
        borderColor: '#ff843a',
        borderBottomWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});