import React from 'react'
import { connect } from 'react-redux';
import WelcomeStack from '../navigation/WelcomeStack';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';

function MainApp(props) {
	const { firstAccess, accessToken } = props;

	if (firstAccess) {
		return <WelcomeStack />
	} else if (!accessToken) {
		return <AuthStack />
	} else {
		return <AppStack />
	}
}

const mapStateToProps = (state) => {
	return {
		firstAccess: state.ui.firstAccess,
		accessToken: state.auth.auth && state.auth.auth.accessToken || null,
	};
}

export default connect(
	mapStateToProps, {}
)(MainApp)