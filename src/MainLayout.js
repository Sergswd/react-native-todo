import { StatusBar } from 'expo-status-bar'
import React, { useState, useContext } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Navbar } from './components/Navbar'
import { TodoContext } from './context/todo/todoContext'
import { ScreenContext } from './context/screen/screenContext'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './theme'

export const MainLayout = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
  const { todoId, changeScreen } = useContext(ScreenContext)

  // const removeTodo = (id) => {
  //   const remTodo = todos.find(todo => todo.id === id)
  //   Alert.alert(
  //     "deleting an item",
  //     `Are you sure you want to delete "${remTodo.title}"?`,
  //     [
  //       {
  //         text: "Cancel",
  //         style: "cancel"
  //       },
  //       { text: "Delete", 
  //         onPress: () => {
  //           setTodoId(null)
  //           setTodos(prev => prev.filter(todo => todo.id !== id))
  //         }, 
  //         style: "destructive"
  //       }
  //     ]
  //   );
  // }

  let content = (
    <MainScreen 
      todos={todos} 
      addTodo={addTodo} 
      removeTodo={removeTodo} 
      openTodo={changeScreen}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen 
        goBack={() => changeScreen(null)} 
        todo={selectedTodo}
        onRemove={removeTodo}
        onSave={updateTodo}
      />
    )
  }

  return (
    <View>
      <Navbar text='Todo App'/>
      <View style={styles.container}>
        {content}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_GORIZONTAL,
    paddingVertical: 20
  } 
});