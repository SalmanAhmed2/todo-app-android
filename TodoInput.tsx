import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, Input } from "native-base"
export default function TodoInput(props) {
    const [text, setText] = useState(null);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Input
                style={{ flex: 1, height: 40, borderWidth: 1, borderRadius: 8 }}
                onChangeText={text => setText(text)}
                value={text}
            />
            <Button
                primary
                style={{ marginLeft: 8, padding: 8, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}
                onPress={() => props.onPress(text)}>
                <Text style={{ color: '#fafafa' }}>Add</Text>
            </Button>
        </View>
    );
}