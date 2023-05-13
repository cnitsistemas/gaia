import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { styles } from './styles';
import Styles from '../../commom/Styles';
import * as Animatable from 'react-native-animatable'
import { Image, Switch } from 'native-base';
import { API_URL, VERSION } from '../../../config';
import Icon, { Icons } from '../../components/Icons';
import { logout, setBiometricAccessUser } from '../../redux/actions/auth';

function Account(props) {
    const {
        navigation,
        userName,
        userEmail,
        avatar,
        logout,
        biometricAccess,
        setBiometricAccessUser
    } = props;
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
                    <View style={styles.headerImg}>
                        {!avatar ? <Image
                            alt='image-logo-user'
                            key={`image-logo-user`}
                            source={require('../../../assets/do-utilizador.png')}
                            style={styles.img}
                        /> : <Image
                            alt='image-logo-user'
                            key={`image-logo-user`}
                            source={{
                                uri: `${avatar}`,
                            }}
                            style={styles.img}
                        />}
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.primaryText}>{userName}</Text>
                        <Text style={styles.secondaryText}>{userEmail}</Text>
                    </View>
                </View>
                <View style={styles.containerSessions}>
                    <Pressable style={styles.actions} onPress={() =>
                        navigation.navigate('Privacy')
                    }>
                        <View style={styles.session}>
                            <Text style={styles.textActionsLong}>Usar biometria para acessar o aplicativo</Text>
                            <Switch
                                onToggle={(val) => setBiometricAccessUser(val, "value")}
                                value={biometricAccess}
                                colorScheme="primary" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.actions} onPress={() =>
                        navigation.navigate('Privacy')
                    }>
                        <View style={styles.session}>
                            <Text style={styles.textActions}>Politica de privacidade</Text>
                            <Icon type={Icons.Ionicons} name='chevron-forward-sharp' color="#acacac" size={20} />
                        </View>
                    </Pressable>
                    <Pressable style={styles.actions} onPress={() =>
                        navigation.navigate('Terms')
                    }>
                        <View style={styles.session}>
                            <Text style={styles.textActions}>Termos e condições</Text>
                            <Icon type={Icons.Ionicons} name='chevron-forward-sharp' color="#acacac" size={20} />
                        </View>
                    </Pressable>
                    <Pressable style={styles.actions} onPress={() => logout()}>
                        <View style={styles.session}>
                            <Text style={styles.textActions}>Sair</Text>
                            <Icon type={Icons.Ionicons} name='exit-outline' color="#acacac" size={20} />
                        </View>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Serviços de Transportes LTDA.</Text>
                    <Text style={styles.footerText}>Versão {VERSION}</Text>
                </View>
            </Animatable.View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.auth && state.auth.auth.name || null,
        userEmail: state.auth.auth && state.auth.auth.email || null,
        avatar: state.auth.auth && state.auth.auth.avatar || null,
        biometricAccess: state.auth && state.auth.biometricAccess || false,
    };
}

export default connect(mapStateToProps, {
    logout,
    setBiometricAccessUser
})(Account)