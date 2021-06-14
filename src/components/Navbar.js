import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import { AppTextBold } from './ui/AppTextBold';

export const Navbar = ({text}) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{text}</AppTextBold>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
  },
  text: {
    color: 'white',
    fontSize: 20
  },
})