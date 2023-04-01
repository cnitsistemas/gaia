import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Styles from '../../commom/Styles'
import * as Animatable from 'react-native-animatable'
import { connect } from 'react-redux';
import { customQuicksandFontBoldUI } from '../../utils/fontsUi';
import { Image } from 'react-native-ui-lib';
import CustomButton from '../../components/CustomButton'
import { clearStorage } from '../../services/asyncStoregeServices';

function Home(props) {
    const { navigation, userName } = props;
    const viewRef = React.useRef(null);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            viewRef.current.fadeInUp()
        })
        return () => unsubscribe;
    }, [navigation, viewRef])
    return (
        <View style={Styles.container}>
            <Animatable.View
                delay={500}
                ref={viewRef}
                easing={'ease-in-out'}
                style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerText}>
                        <Text style={styles.primaryText}>Olá, {userName}!</Text>
                        <Text style={styles.secondaryText}>Esse é o seu jeito facil de gerenciar os alunos e as rotas do CNIT.</Text>
                    </View>
                    <View style={styles.headerImg}>
                        <Image
                            key={`image-logo-user`}
                            source={require('../../../assets/do-utilizador.png')}
                            style={styles.img}
                        />
                    </View>


                </View>
                <CustomButton
                    borderRadius={7}
                    text70
                    white
                    background-primary
                    enableShadow
                    label="Clear Async"
                    onPress={() => clearStorage()}
                    style={styles.buttonSubimit}
                />
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25
    },
    primaryText: {
        ...customQuicksandFontBoldUI,
        fontSize: 26,
    },
    secondaryText: {
        ...customQuicksandFontBoldUI,
        fontSize: 12,
        color: "#acacac"
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: '100%',
        marginTop: 50
    },
    headerText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
    },
    headerImg: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    img: {
        height: 52,
        width: 52
    },
});

const mapStateToProps = (state) => {
    return {
        userName: state.auth.auth && state.auth.auth.name || null
    };
}

export default connect(mapStateToProps, {
})(Home)