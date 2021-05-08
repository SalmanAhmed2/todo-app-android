import React, { useState } from 'react'
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "native-base"
export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState(null);
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View style={{ padding: 10 }}>
            <Input
                placeholder="Enter Values"
                onChangeText={changeHandler}
                value={text}
                style={styles.input}
            />
            <Button full
                style={styles.addBtn}
                onPress={() => submitHandler(text, setText)}>
                <Text style={styles.btnText}>Add Todo</Text>
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    addBtn: {
        margin: 10,
        borderRadius: 8,
        backgroundColor: "darkblue",
    },
    btnText: {
        fontSize: 17,
        fontFamily: "Rubik"
    }
})
