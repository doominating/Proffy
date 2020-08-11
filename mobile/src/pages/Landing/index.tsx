import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartIcon from '../../assets/images/icons/heart.png';
import learnIcon from '../../assets/images/icons/learn.png';
import teachIcon from '../../assets/images/icons/teach.png';
import landingImg from '../../assets/images/landing.png';
import styles from './styles';

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigationToTeachPage() {
    navigate('Teach');
  }

  function handleNavigateToLearnPages() {
    navigate('Learn');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToLearnPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={learnIcon} />
          <Text style={styles.buttonText}>Aprender</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigationToTeachPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={teachIcon} />
          <Text style={styles.buttonText}>Ensinar</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
