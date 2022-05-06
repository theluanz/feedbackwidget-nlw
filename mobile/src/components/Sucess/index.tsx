import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import sucessImg from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';
interface Props {
  onRestartFeedback: () => void;
}

export function Sucess({ onRestartFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image source={sucessImg} style={styles.image} />
      <Text style={styles.title}>Agradecemos o seu Feedback</Text>

      <TouchableOpacity style={styles.button} onPress={onRestartFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
