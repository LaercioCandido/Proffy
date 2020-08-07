import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

function Landing() {
	const { navigate } = useNavigation();

	function handleNavigateToGiveClassesPage() {
		navigate('GiveClasses');
	}

	return (
		<View style={styles.container}>
			<Image source={landingImg} style={styles.banner} />
			<Text style={styles.title}>
				Seja bem-vindo, {'\n'}
				<Text style={styles.titleBold}>
					O que deseja fazer?
				</Text>
				<View style={styles.buttonsContainer}>
					<RectButton style={[styles.button, styles.buttonPrimary]}>
						<Image source={studyIcon} />
						<Text>Estudar</Text>
					</RectButton>
					<RectButton
						onPress={handleNavigateToGiveClassesPage}
						style={[styles.button, styles.buttonSecondary]}>
							<Image source={giveClassesIcon} />
							<Text style={styles.buttonText}>Lecionar</Text>
					</RectButton>
				</View >
				<Text style={styles.totalConnections}>
					Total de 3 conexões realizadas {' '}
					<Image source={heartIcon} />
				</Text>
			</Text>
		</View>
	);
}

export default Landing;