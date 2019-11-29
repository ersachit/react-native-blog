import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);
    return <View>
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }}
        />
    </View>
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather style={styles.headerIcon} name="plus" />
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: .3,
        borderColor: '#D3D3D3'
    },
    title: {
        marginStart: 10,
        fontSize: 16
    },
    icon: {
        fontSize: 20,
        marginEnd: 10
    },
    headerIcon: {
        fontSize: 20,
        marginEnd: 10
    }
})

export default IndexScreen;