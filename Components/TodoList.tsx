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
                    <Button onPress={() => handleUpdate({ task: text, key: item.key })} style={styles.updateBtn}><Text>Update</Text></Button> :
                    <Button onPress={() => editTodo(item)} style={styles.editBtn}><Text>Edit</Text></Button>
            }
            <Button onPress={() => deleteTodo(item.key)} style={styles.deleteBtn}>
                <Text style={{ fontWeight: "bold" }}>X</Text>
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"

    },
    text: {
        flex: 5,
        fontSize: 20,
        fontWeight: "bold"
    },
    deleteBtn: {
        backgroundColor: "red",
        borderRadius: 8
    },
    editBtn: {
        borderRadius: 8,
        marginHorizontal: 5,
    },
    updateBtn: {
        backgroundColor: "green",
        borderRadius: 8,
        marginHorizontal: 5,
        flex: 3,
    },
    input: {
        flex: 5,
        borderWidth: 1,
        borderRadius: 8
    }
})
