export const mapLoginCreateData = (data) => {
	return {
		name: data['user_name'],
		email: data['user_email'],
		success: data['success'],
		accessToken: data['access_token'],
		tokenType: data['token_type'],
		message: data['Mensagem'],
		expiresAt: data['expires_at']
	}
}