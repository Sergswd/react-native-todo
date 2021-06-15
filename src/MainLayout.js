import { StatusBar } from 'expo-status-bar'
import React, { useState, useContext } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Navbar } from './components/Navbar'
import { TodoContext } from './context/todo/todoContext'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './theme'

export const MainLayout = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
  const [todoId, setTodoId] = useState(null)
  // const [todos, setTodos] = useState([])

  // const addTodo = (title) => {
  //   setTodos(prev => [
  //     ...prev, 
  //     {
  //       id: Date.now().toString(),
  //       title
  //     }
  //   ])
  // }

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

  // const updateTodo = (id, title) => {
  //   setTodos(old => old.map(todo => {
  //       if (todo.id === id) {
  //         todo.title = title
  //       }
  //       return todo
  //     }) 
  //   )
  // }

  let content = (
    <MainScreen 
      todos={todos} 
      addTodo={addTodo} 
      removeTodo={removeTodo} 
      openTodo={setTodoId}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen 
        goBack={() => setTodoId(null)} 
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