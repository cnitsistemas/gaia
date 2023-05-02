import React from 'react'
import { VStack, Text, Pressable, Box, HStack, Badge, Spacer, Flex, ScrollView, View } from "native-base";
import Colors from '../../constants/Colors';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

function Notifications(props) {
    const { frequency } = props;
    console.log(frequency)
    return (
        <ScrollView style={{ paddingVertical: 20 }}>
            <VStack space={4} alignItems="center">
                <Pressable>
                    {({ isHovered, isPressed }) => {
                        return <Box maxW="96"
                            shadow="2" bg={isPressed ? Colors.gray : isHovered ? Colors.gray : Colors.newGray} p="5"
                            rounded="8" style={{
                                marginBottom: 7,
                                transform: [{
                                    scale: isPressed ? 0.96 : 1
                                }]
                            }}>
                            <HStack alignItems="center">
                                <Badge colorScheme={Colors.skyBlue} _text={{ color: 'white' }} variant="solid" rounded="4">
                                    Pendente
                                </Badge>
                                <Spacer />
                                <Text fontSize={10} color="coolGray.800">
                                    1 month ago
                                </Text>
                            </HStack>
                            <HStack alignItems="center">
                                <View maxW="85%">
                                    <Text color="coolGray.800" mt="1" fontWeight="medium" fontSize="sm">
                                        Finalizar Frequência
                                    </Text>
                                    <Text mt="2" fontSize="11" color="coolGray.700" >
                                        Você tem uma nova frêquancia para ser finalizada. Toque na notificação para concluir essa pendência.
                                    </Text>
                                </View>
                                <Spacer />
                                <AntDesign name="right" size={24} color="#ff843a" />
                            </HStack>
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