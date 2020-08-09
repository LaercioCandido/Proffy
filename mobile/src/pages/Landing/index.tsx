import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'


import api from '../../services/api';

import styles from './styles';

function Landing() {

  const navigation = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const {total} = response.data;

      setTotalConnections(total);
    })
  },[])

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigation.navigate('Study');
  }


   return(
   <View style={styles.container}>
     <Image source={landingImg} style={styles.banner}/>

     <View style={styles.titleContainer}>
     <Text style={styles.title}>
       Seja bem-vindo(a),{'\n'}
       <Text style={styles.titleBold}>O que deseja fazer?</Text>
     </Text>
     </View>

     <View style={styles.buttonsContainer}>
       <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
         <Image source={studyIcon}/>
         <Text style={styles.buttonText}>Estudar</Text>
       </RectButton>

       <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
         <Image source={giveClassesIcon}/>
         <View style={styles.buttonsTextContainer}>
         <Text style={styles.buttonText}>Dar</Text>
         <Text style={styles.buttonText}>Aulas</Text>
         </View>
       </RectButton>
     </View>

     <View style={styles.connectionsContainer}>
      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões! <Image source={heartIcon}/>
      </Text>
    </View>

   </View>
   )
}

export default Landing;
