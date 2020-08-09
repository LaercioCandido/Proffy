import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
	const { goBack } = useNavigation();

	function handleNavigateBack() {
		goBack();
	}

	return (
		<View style={styles.container} >
			<ImageBackground
				resizeMode="contain"
				source={ giveClassesBgImage }
				style={styles.content}
			>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Quer ser um Proffy?</Text>
				</View>
				<View style={styles.descriptionContainer}>
					<Text style={styles.description}>Para começar você precisa se cadastrar como professor na nossa plataforma web</Text>
				</View>
			</ImageBackground>
			<RectButton onPress={handleNavigateBack} style={styles.okButton}>
				<Text style={styles.okButtonText}>É pra já!</Text>
			</RectButton>
		</ View>
	);
}

export default GiveClasses;
