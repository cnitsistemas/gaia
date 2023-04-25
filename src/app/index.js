import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import WelcomeStack from '../navigation/WelcomeStack';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import * as LocalAuthentication from 'expo-local-authentication';
import { Alert } from 'react-native';
import { setBiometricAccessUser } from '../redux/actions/auth';

function MainApp(props) {
	const { firstAccess, accessToken, biometricAccess, setBiometricAccessUser } = props;
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	async function verifyAvailabeAuthentication() {
		const compatible = await LocalAuthentication.hasHardwareAsync();
		const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

		if (compatible && types.length > 0) {
			return true;
		}
		return false;
	}

	async function handleAuthentication() {
		const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

		if (!isBiometricEnrolled) {
			setBiometricAccessUser(false);
			return Alert.alert('Login', 'Nenhuma biometria encontrada. Por favor, cadastre no dispositivo!');
		}

		const auth = await LocalAuthentication.authenticateAsync({
			promptMessage: 'Acessar com Biometria',
			fallbackLabel: 'Biometria não reconhecida!'
		});

		setIsAuthenticated(auth.success);
	}

	useEffect(() => {
		if (accessToken && biometricAccess) {
			verifyAvailabeAuthentication().then((verify) => {
				if (verify) {
					handleAuthentication();
				} else {
					setIsAuthenticated(true);
				}
			});
		}
	}, [accessToken, biometricAccess])

	if (firstAccess) return <WelcomeStack {...props} />
	else if (!biometricAccess) {
		if (!accessToken) return <AuthStack {...props} />
		else return <AppStack {...props} />
	} else if (!accessToken && !biometricAccess) return <AuthStack {...props} />
	else return <AppStack {...props} />
}

const mapStateToProps = (state) => {
	return {
		firstAccess: state.ui.firstAccess,
		accessToken: state.auth.auth && state.auth.auth.accessToken || null,
		biometricAccess: state.auth && state.auth.biometricAccess || false,
	};
}

export default connect(
	mapStateToProps, {
	setBiometricAccessUser
}
)(MainApp)