import React from 'react'
import { VStack, Text, Pressable, Box, ScrollView, View, Stack } from "native-base";
import Colors from '../../constants/Colors';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

function Notifications(props) {
    const { frequency } = props;
    console.log(frequency)
    return (
        <ScrollView>
            <VStack space={1} alignItems="center">
                <Pressable>
                    {({ isHovered, isPressed }) => {
                        return <Box bg={isPressed ? Colors.gray : isHovered ? Colors.gray : Colors.newGray} p="5"
                            rounded="8" style={{
                                marginBottom: 7,
                                transform: [{
                                    scale: isPressed ? 0.96 : 1
                                }]
                            }}>
                            <Stack direction="row" mb="2.5" space={3}>
                                <AntDesign name="right" size={24} color="#ff843a" />
                                <Stack direction="column" space={3}>
                                    <Text color="coolGray.800" fontWeight="medium" fontSize="sm">
                                        Finalizar Frequência
                                    </Text>
                                    <View maxW="87%">
                                        <Text fontSize="11" color="coolGray.700" >
                                            Você tem uma nova frêquancia para ser finalizada. Toque na notificação para concluir essa pendência.
                                        </Text>
                                    </View>
                                </Stack>
                                <Text fontSize={10} color="coolGray.800">
                                    1 month ago
                                </Text>
                            </Stack>

                        </Box>
                    }}
                </Pressable>
            </VStack>
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        routes: state.routes && state.routes.routes || null,
        frequency: state.frequency && state.frequency.frequency || {}
    };
}

export default connect(mapStateToProps, {})(Notifications)