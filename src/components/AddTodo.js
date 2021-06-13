import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { THEME } from '../theme';

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название дела не может быть пустым')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input}
        value={value}
        placeholder='Введите название дела...'
        onChangeText={setValue}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Button title='Добавить' onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: THEME.MAIN_COLOR
  }
})