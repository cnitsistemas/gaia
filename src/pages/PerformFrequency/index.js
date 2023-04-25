import { ActivityIndicator, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Checkbox, HStack, Text, VStack, ScrollView, useToast } from 'native-base';
import { connect } from 'react-redux';
import { getDataFrequency, makeFrequency } from '../../redux/actions/frequency';
import { styles } from './styles';
import CustomButton from '../../components/CustomButton';
import Loading from '../../components/Loading';
import CustomDialog from '../../components/CustomDialog';
import ToastAlert from '../../components/Toast';
import { useNavigation } from '@react-navigation/native';

function PerformFrequency(props) {
    const { frequency, getDataFrequency, makeFrequency } = props;
    const navigation = useNavigation();
    const toast = useToast();
    const [list, setList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [screenLoading, setScreenLoading] = useState(false);
    const [isVisibleDialog, setIsVisibleDialog] = useState(false);

    useEffect(() => {
        setScreenLoading(true);
        if (frequency && frequency.id) {
            getDataFrequency({ id: frequency.id }).then((res) => {
                setList(res.frequencyData);
                setScreenLoading(false);
            })
                .catch(() => setScreenLoading(false));
        }
    }, [frequency])
    const handleStatusChange = index => {
        setList(prevList => {
            const newList = [...prevList];
            newList[index].presenca = !newList[index].presenca;
            return newList;
        });
    };
    const showToast = (item) => {
        toast.show({
            placement: "top",
            render: ({
                id: id
            }) => {
                return <ToastAlert id={id} {...item} />;
            }
        })
    }
    const handleApllyFrequency = () => {
        setIsVisibleDialog(false);
        setIsLoading(true);
        makeFrequency({ id: frequency.id, data: list }).then(() => {
            setIsLoading(false);
            navigation.navigate('Home')
            setTimeout(() => {
                showToast({
                    id: 'test',
                    title: "Frequência realizada",
                    status: 'success',
                    variant: "solid",
                    description: "Frequência realizada com sucesso!",
                    isClosable: true
                });
            }, 2000);
        })
            .catch((e) => console.log(e));
    };
    return (
        <View style={styles.container}>
            {screenLoading ? <Loading /> : <>
                <View style={styles.description}>
                    <Text style={styles.textDescription}>Ao realizar a frequência você deve marcar os alunos que se encontram presentes no veículo de execulção da rota.</Text>
                </View>
                <ScrollView>
                    <VStack space={2} style={styles.frequency}>
                        <VStack space={2}>
                            {list && list.length > 0 && list.map((item, itemI) => <HStack w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                style={styles.frequencyRow}
                                key={item.name + itemI.toString()}
                            >
                                <Checkbox isChecked={item.presenca} size="md" onChange={() => handleStatusChange(itemI)} value={item.name} aria-label='check'></Checkbox>
                                <Text style={styles.textNameStudent} width="100%" flexShrink={1} textAlign="left" mx="2" _light={{
                                    color: !item.presenca ? "gray.400" : "coolGray.800"
                                }} _dark={{
                                    color: !item.presenca ? "gray.400" : "coolGray.50"
                                }} onPress={() => handleStatusChange(itemI)}>
                                    {item.name}
                                </Text>
                            </HStack>)}
                        </VStack>
                    </VStack>
                </ScrollView>

                <View style={styles.action}>
                    {isLoading ? <ActivityIndicator size="large" color="#c7c7c7" /> :
                        <CustomButton
                            borderRadius={7}
                            label="ENVIAR FREQUÊNCIA"
                            color="green"
                            onPress={() => setIsVisibleDialog(true)}
                            style={styles.buttonSubimit}
                        />}
                </View>
            </>}
            <CustomDialog
                visible={isVisibleDialog}
                setVisible={setIsVisibleDialog}
                title={`Confirmar envio da frequência`}
                content={<>
                    <VStack space={3}>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text fontWeight="medium">
                                Ao enviar a frequência você confirma que todos os alunos marcados estão presentes. Não é possivel editar após o envio e o registro pode ser consultado no painel adiministrativo.
                            </Text>
                        </HStack>
                    </VStack></>}
                visibleCancel={false}
                visibleConfirm={true}
                textCancel={``}
                textConfirm={`Confirmar`}
                handleCancelButton={() => setIsVisibleDialog(false)}
                handleConfirmButton={() => handleApllyFrequency()}
                size={'lg'}
                closeOnOverlayClick={false}
            />
        </View>

    )
}

const mapStateToProps = (state) => {
    return {
        routes: state.routes && state.routes.routes || null,
        frequency: state.frequency && state.frequency.frequency || {}
    };
}

export default connect(mapStateToProps, {
    getDataFrequency,
    makeFrequency
})(PerformFrequency)