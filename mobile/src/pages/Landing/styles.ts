import { StyleSheet } from 'react-native';

const primaryColor = '#8257e5'

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#8257E5',
		justifyContent: 'center',
		padding: 40
	},

	banner: {
		width: '100%',
		resizeMode: 'contain'
	},

	titleContainer: {
		alignItems: 'center'
	},

	title: {
		fontFamily: 'Poppins_400Regular',
		color: '#FFF',
		fontSize: 20,
		lineHeight: 30,
		marginTop: 80
	},

	titleBold: {
		fontFamily: 'Poppins_600SemiBold',
		fontWeight: 'bold'
	},

	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 40,
		justifyContent: 'space-between',
	},

	button: {
		height: 150,
		width: '48%',
		borderRadius: 8,
		padding: 24,
		justifyContent: 'space-between'
	},

	buttonPrimary: {
		backgroundColor: '#9871f5',
	},

	buttonSecondary: {
		backgroundColor: '#04d361'
	},

	buttonsTextContainer: {
		alignItems: 'center',
	},

	buttonText: {
		fontFamily: 'Archivo_700Bold',
		color: '#FFF',
		fontSize: 20,
	},

	connectionsContainer: {
		alignItems: 'center',
	},

	totalConnections: {
		fontFamily: 'Poppins_400Regular',
		color: '#d4c2ff',
		fontSize: 12,
		lineHeight: 20,
		maxWidth: 140,
		marginTop: 40,
	}
});

export default styles;
