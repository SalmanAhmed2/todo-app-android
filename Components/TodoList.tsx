import React, { useState,useEffect } from 'react'
import { View, StyleSheet,AsyncStorage } from "react-native";
import { Button, Text, Input } from "native-base"

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
            <Button onPress={() => deleteTodo(item.key)} style={styles.deleteBtn} danger >
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
        flex: 4,
        fontSize: 20,
        fontWeight: "bold"
    },
    deleteBtn: {
        flex: 0.8,
        borderRadius: 8
    },
    editBtn: {
        flex: 1.2,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    updateBtn: {
        flex: 1.8,
        backgroundColor: "green",
        borderRadius: 8,
        marginHorizontal: 5,
    },
    input: {
        flex: 3.5,
        borderWidth: 1,
        borderRadius: 8
    }
})
