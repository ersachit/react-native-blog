import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return <View>
        <Text>{blogPost.title}</Text>
    </View>
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <Feather style={styles.headerIcon} name="edit" />
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    headerIcon: {
        fontSize: 20,
        marginEnd: 10
    }
})

export default ShowScreen;