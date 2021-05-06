import React, { useState } from 'react';
import {FlatList } from 'react-native';
import { Container, Header, Title, Content } from "native-base"
//Custom Component
import AddTodo from "./Components/AddTodo"
import TodoList from "./Components/TodoList"
const App = () => {
  const [todoItems, setTodoItems] = useState([{ task: "task", key: "1" }])
  const [isEdit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState('')
  const submitHandler = (text, setText) => {
    setTodoItems((prevTodos) => {
      return [
        { task: text, key: Math.floor(Math.random() * 100).toString() },
        ...prevTodos,
      ]
    })
    setText("")
  }

  const deleteTodo = (key) => {
    setTodoItems((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const editTodo = (task) => {
    setEditTask(task)
    setEdit(true)
  }
  const handleUpdate = (text) => {
    setTodoItems((prevTodos) => {
      const newValue = prevTodos.map((todo) => todo.key === text.key ? text : todo);
      return [
        ...newValue
      ]
    })
    setEdit(false)
  }
  return (
    <Container>
      <Header>
        <Title>Todo App</Title>
      </Header>
      <Content >
        <AddTodo submitHandler={submitHandler} />
        <FlatList
          data={todoItems}
          renderItem={({ item }) => (
            <TodoList item={item} deleteTodo={deleteTodo} editTodo={editTodo} editTask={editTask} handleUpdate={handleUpdate} isEdit={isEdit} />
          )}
        />
      </Content>
    </Container>
  );
};

export default App;