import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, FlatList, Button
} from 'react-native';

export default class Projetos extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../img/back3.png')} resizeMode={'stretch'}>

                <View style={styles.header}>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { this.props.navigation.goBack() }}>
                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back4.png')}
                        />
                    </TouchableOpacity>

                    <Text style={styles.titulo}>Projetos</Text>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { }}>
                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back6.png')}
                        />
                    </TouchableOpacity>

                </View>








            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#AAAAAAAA',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#F7F7F7F7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        color: '#053B70',
        fontSize: 25,
        fontFamily: 'Ubuntu-Bold',
        marginLeft: 10
    },
    btnOp: {
        marginLeft: 10,
        marginRight: 10,
    },
})