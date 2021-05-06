import React, { useState } from 'react'
import { View, StyleSheet } from "react-native";
import { Button, Text, Input, Icon } from "native-base"

export default function TodoList({ deleteTodo, item, editTask, editTodo, handleUpdate, isEdit }) {
    const [text, setText] = useState(item.task)
    const handleChange = (val) => {
        setText(val)
    }
    return (
        <View style={styles.container}>
            {(editTask.key == item.key && isEdit) ?
                <Input
                    style={styles.input}
                    onChangeText={handleChange} value={text} /> :
                <Text style={styles.text}>{item.task}</Text>
            }
            {
                (editTask.key == item.key && isEdit) ?
                    <Button onPress={() => handleUpdate({ task: text, key: item.key })} ><Text>Update</Text></Button> :
                    <Button onPress={() => editTodo(item)} ><Text>Edit</Text></Button>
            }
            <Button onPress={() => deleteTodo(item.key)}><Icon name="trash" danger /><Text>X</Text></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 10,
        display: "flex",
        flexDirection: "row"
    },
    text: {
        flex: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8
    }
})
