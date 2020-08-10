import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image
					style={styles.avatar}
					source={{ uri: 'https://github.com/laerciocandido.png' }}
				/>

				<View style={styles.profileInfo}>
					<Text style={styles.name}>Laercio Candido</Text>
					<Text style={styles.subject}>Matemática</Text>
				</View>
			</View>
			<Text style={styles.bio}>
				Saindo da área.
				{'\n'}
				Mas tenho ótimos contatos pra te passar.
			</Text>
			<View style={styles.footer}>
				<Text style={styles.price}>
					Hora/aula {'   '}
					<Text style={styles.priceValue}>R$ 90,00</Text>
				</Text>
				<View style={styles.buttonsContainer}>
					<RectButton style={[styles.favoriteButton, styles.favorited]}>
						{/*<Image source={heartOutlineIcon} />*/}
						<Image source={unfavoriteIcon} />
					</RectButton>
					<RectButton style={styles.contactButton}>
						<Image source={whatsappIcon} />
						<Text style={styles.contactButtonText}>Entrar em contato</Text>
					</RectButton>
				</View>
			</View>
		</View>
	)
}

export default TeacherItem;
