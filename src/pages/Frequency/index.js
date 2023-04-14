import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import CustomSelect from '../../components/CustomSelect';
import { getRoutes } from '../../redux/actions/rotas';
import { connect } from 'react-redux';
import CustomDatePicker from '../../components/CustomDatePicker';
import CustomButton from '../../components/CustomButton';

const turno = [
    {
        id: 'Manhã',
        nome: 'Manhã',
    },
    {
        id: 'Tader',
        nome: 'Tader',
    },
    {
        id: 'Noite',
        nome: 'Noite',
    }
]

function Frequency(props) {
    const { getRoutes, routes } = props;
    const [selectedRouter, setSelectedRouter] = useState();
    const [selectedTurno, setSelectedTurno] = useState();
    const [selectDate, setSelectDate] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useState(() => {
        getRoutes();
    }, [])

    return (
        <View style={styles.container}>
            <CustomDatePicker
                label="Data da Frequência:"
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                isDatePickerVisible={isDatePickerVisible}
                setDatePickerVisibility={setDatePickerVisibility}
            />
            <CustomSelect
                label="Rota:"
                items={routes}
                selectedItems={selectedRouter}
                setSelectedItems={setSelectedRouter}
            />
            <CustomSelect
                label="Turno:"
                items={turno}
                selectedItems={selectedTurno}
                setSelectedItems={setSelectedTurno}
            />

            {isLoading ? <ActivityIndicator size="large" color="#c7c7c7" /> :
                <CustomButton
                    borderRadius={7}
                    text70
                    white
                    background-primary
                    enableShadow
                    label="Salvar"
                    onPress={() => console.log('Chamada')}
                    style={styles.buttonSubimit}
                />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    button: {
        backgroundColor: '#8B93A5',
        padding: 10,
        borderRadius: 6,
        marginTop: 50,
    },
    buttonSubimit: {
        marginTop: 3,
        height: 60,
    }
});

const mapStateToProps = (state) => {
    return {
        routes: state.routes && state.routes.routes || null
    };
}

export default connect(mapStateToProps, {
    getRoutes
})(Frequency)