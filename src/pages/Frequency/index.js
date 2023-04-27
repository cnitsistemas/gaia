import React, { useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import moment from 'moment';
import { createFrequency } from '../../redux/actions/frequency';
import { HStack, VStack, useToast } from 'native-base';
import CustomDialog from '../../components/CustomDialog';
import Loading from '../../components/Loading';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import CustomDatePicker from '../../components/CustomDatePicker';
import CustomSelect from '../../components/CustomSelect';
import ToastAlert from '../../components/Toast';

const turno = [
    { id: 'Manhã', nome: 'Manhã' },
    { id: 'Tader', nome: 'Tader' },
    { id: 'Noite', nome: 'Noite' }
]

const itemSense = [
    { id: 'Ida', nome: 'Ida' },
    { id: 'Volta', nome: 'Volta' },
]

function Frequency(props) {
    const { createFrequency, selectedRoute } = props;
    const navigation = useNavigation();
    const toast = useToast();
    const [selectedTurno, setSelectedTurno] = useState(null);
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectSense, setSelectSense] = useState(null);
    const [selectHours, setSelectHours] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [screenLoading, setScreenLoading] = useState(false);
    const [isVisibleDialog, setIsVisibleDialog] = useState(false);

    useState(() => {
        setScreenLoading(true);
        setSelectedTurno(turno[0]);
        setSelectSense(itemSense[0]);

        setTimeout(() => {
            setScreenLoading(false);
        }, 1000)
    }, [])

    const showToast = (item) => {
        toast.show({
            duration: 3000,
            placement: "top",
            render: ({
                id: id
            }) => {
                return <ToastAlert id={id} {...item} />;
            }
        })
    }

    const handleCreateFrequency = () => {
        setIsVisibleDialog(false);
        setIsLoading(true);
        const data = {
            rota_id: selectedRoute && selectedRoute.id,
            turno: selectedTurno && selectedTurno.nome,
            data_chamada: moment(selectDate).format(),
            realizada: 0,
            sentido: selectSense && selectSense.id,
            horario: moment(selectHours).format("HH:mm"),
        }

        createFrequency(data).then((response) => {
            setIsLoading(false);
            if (response.success) {
                showToast({
                    id: 'create-frequency',
                    title: "Frequência criada!",
                    status: 'success',
                    variant: "solid",
                    description: "Frequência cadastrada com sucesso!",
                    isClosable: false
                });
                setTimeout(() => {
                    navigation.navigate('PerformFrequency')
                }, 2000);
            } else {
                showToast({
                    id: 'error-frequency',
                    title: "Falha no cadastro!",
                    status: 'error',
                    variant: "solid",
                    description:
                        (response.message || "A rota selecionada não possui alunos cadastrados ou não possui alunos para o horário escolido."),
                    isClosable: false
                });
            }
        })
            .catch((e) => console.log(e));
    };

    return (
        <View style={styles.container}>
            {screenLoading ? <Loading /> : <>
                <View style={styles.description}>
                    <Text style={styles.textDescription}>Ao criar uma frequência você estabelece informações importantes para a criação do fluxo de chamadas dos alunos
                        . Baseado em informações como Data, horário, rota e turno, é possivel listar os alunos que irão participar da realização da frequência. </Text>
                </View>
                <View>
                    <Text style={styles.dateLebel}>Rota Selecionada</Text>
                    <Text style={styles.route}>{selectedRoute && selectedRoute.name}</Text>
                    <Text style={styles.dateLebel}>Data da frequência</Text>
                    <Text style={styles.date}>{moment(selectDate).format('DD/MM/YYYY')}</Text>
                    <CustomDatePicker
                        label="Horario:"
                        selectDate={selectHours}
                        setSelectDate={setSelectHours}
                        isDatePickerVisible={isDatePickerVisible}
                        setDatePickerVisibility={setDatePickerVisibility}
                    />
                    <CustomSelect
                        label="Sentido:"
                        items={itemSense}
                        selectedItems={selectSense}
                        setSelectedItems={setSelectSense}
                    />
                    <CustomSelect
                        label="Turno:"
                        items={turno}
                        selectedItems={selectedTurno}
                        setSelectedItems={setSelectedTurno}
                    />
                </View>
                <View style={styles.action}>
                    {isLoading ? <ActivityIndicator size="large" color="#c7c7c7" /> :
                        <CustomButton
                            borderRadius={7}
                            label="CRIAR FREQUÊNCIA"
                            onPress={() => setIsVisibleDialog(true)}
                            style={styles.buttonSubimit}
                            isDisabled={!selectHours}
                        />}
                </View>
            </>
            }
            <CustomDialog
                visible={isVisibleDialog}
                setVisible={setIsVisibleDialog}
                title={`Confirmar dados da frequência`}
                content={<>
                    <VStack space={3}>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text style={styles.textDialogLabel}>Data</Text>
                            <Text style={styles.textDialog}>{moment(selectDate).format('DD/MM/YYYY')}</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text style={styles.textDialogLabel}>Horário</Text>
                            <Text style={styles.textDialog}>{moment(selectHours).format('HH:mm')}</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text style={styles.textDialogLabel}>Sentido</Text>
                            <Text style={styles.textDialog}>{selectSense && selectSense.nome}</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text style={styles.textDialogLabel}>Rota</Text>
                            <Text style={styles.textDialog}>{selectedRoute && selectedRoute.name}</Text>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text style={styles.textDialogLabel}>Turno</Text>
                            <Text color="green.500">{selectedTurno && selectedTurno.nome}</Text>
                        </HStack>
                    </VStack></>}
                visibleCancel={false}
                visibleConfirm={true}
                textCancel={``}
                textConfirm={`Confirmar`}
                handleCancelButton={() => setIsVisibleDialog(false)}
                handleConfirmButton={() => handleCreateFrequency()}
                size={'lg'}
                closeOnOverlayClick={false}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedRoute: state.frequency && state.frequency.selectedRoute || {}
    };
}

export default connect(mapStateToProps, {
    createFrequency
})(Frequency)