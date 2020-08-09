import React, { ReactNode, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, ScrollView, ScrollViewBase } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png'

import styles from './styles';


interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {


  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (


    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain"/>
      </View>

      <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {headerRight}
      </View>

      {children}
      </ScrollView>
    </View>
  )
}

export default PageHeader;
