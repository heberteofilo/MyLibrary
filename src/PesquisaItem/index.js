import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, FlatList, Button
} from 'react-native';



export default class ItemPesquisa extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        const { navigation } = this.props;
        const livro = navigation.getParam('livro');

        return (
            <ImageBackground style={styles.container} source={require('../img/back7.png')} resizeMode={'stretch'}>

                <View style={styles.header}>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { this.props.navigation.goBack() }}>
                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back4.png')}
                        />
                    </TouchableOpacity>

                    <Text style={styles.titulo}>Livro Info</Text>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { }}>
                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back12.png')}
                        />
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Image
                        style={{ width: 165, height: 225, marginTop: 25, marginBottom: 10,marginLeft: 10, alignSelf: 'flex-start' }}
                        source={livro.capa}
                    />
                    <View>
                        <Text style={styles.tituloLivro}>Titulo: {livro.livro} </Text>
                        <Text style={styles.texto}>Autor(a): {livro.autor} </Text>
                        <Text style={styles.texto}>Status: {livro.disponibilidade} </Text>
                        <Text style={styles.texto}>Requisitado: {livro.solicitado}</Text>
                        <Text style={styles.texto}>Categoria: {livro.categoria}</Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        style={styles.btnOp2}
                        onPress={() => { this.props.navigation.navigate('MinhaLista', { 'addLivro': livro }) }}
                    >
                        <Text style={styles.btnOp2Texto}>ADD</Text>
                        <Image
                            style={{ width: 40, height: 40, marginRight: 5 }}
                            source={require('../img/back8.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnOp3}
                        onPress={() => { this.props.navigation.navigate('MinhaReserva', { 'addLivro': livro }) }}
                    >
                        <Text style={styles.btnOp2Texto}>RESERVAR</Text>
                        <Image
                            style={{ width: 34, height: 34, marginRight: 5 }}
                            source={require('../img/back14.png')}
                        />
                    </TouchableOpacity>

                </View>

            </ImageBackground >
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
    tituloLivro: {
        width: 190,
        flexWrap: 'wrap',
        fontSize: 16,
        marginTop: 30,
        marginLeft: 5,
        fontFamily: 'Ubuntu-Bold',
    },
    texto: {
        width: 190,
        flexWrap: 'wrap',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5,
        fontFamily: 'Ubuntu-Bold',
    },
    btnOp: {
        marginLeft: 10,
        marginRight: 10,
    },
    btnOp2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#053B70',
        padding: 6,
        marginTop: 20,
    },
    btnOp3: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#053B70',
        marginLeft: 5,
        padding: 6,
        marginTop: 20,
        marginLeft: 50
    },
    btnOp2Texto: {
        fontSize: 17,
        marginLeft: 5,
        marginRight: 10,
        color: '#FFFFFF',
        fontFamily: 'Ubuntu-Bold'
    }
})