import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import { AppTextBold } from './ui/AppTextBold';

export const Navbar = ({text}) => {
  return (
    <View style={{...styles.navbar, ...Platform.select({
      ios: styles.navbarIos,
      android: styles.navbarAndroid
    })}}>
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
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
    fontSize: 20
  },
})