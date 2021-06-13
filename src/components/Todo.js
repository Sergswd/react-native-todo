import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10
  }
})