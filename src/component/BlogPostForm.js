import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />

        <Button title="Save Blog" onPress={() => onSubmit(title, content)} />
    </View>
}

BlogPostForm.defaultProps   =   {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 45,
        borderColor: 'black',
        fontSize: 15,
        margin: 10,
        padding: 5
    },
    label: {
        fontSize: 16,
        marginStart: 10,
        marginTop: 5
    }
})

export default BlogPostForm;