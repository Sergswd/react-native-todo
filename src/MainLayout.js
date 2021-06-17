import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Navbar } from './components/Navbar'
import { ScreenContext } from './context/screen/screenContext'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './theme'

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext)

  return (
    <View style={styles.wrapper}>
      <Navbar text='Todo App'/>
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_GORIZONTAL,
    paddingVertical: 20,
    flex: 1
  },
  wrapper: {
    flex: 1
  }
});