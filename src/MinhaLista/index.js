import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, FlatList, Button
} from 'react-native';

import FeedLista from './FeedLista';
import Home from '../Home';

export default class MinhaLista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minhaLista: [
                {
                    id: 7,
                    autor: 'Nicolas Sparks',
                    livro: 'O Casamento',
                    capa: require('../img/imgP/Livro7.png'),
                    disponibilidade: 'Disponível',
                    solicitado: 353,
                    categoria: 'Romance'
                }
            ],

        };

    }

    addLivro() {

        const { navigation } = this.props;
        const livroAdd = navigation.getParam('addLivro');

        if (livroAdd == null) {
            return alert("Não tem livro para adicionar")
        }
        let livroId = livroAdd.id
        const teste = this.state.minhaLista.filter((e) => e.id === livroId)

        if (teste[0] === undefined) {
            this.state.minhaLista.push({
                'id': livroAdd.id,
                'autor': livroAdd.autor,
                'livro': livroAdd.livro,
                'capa': livroAdd.capa,
                'disponibilidade': livroAdd.disponibilidade,
                'solicitado': livroAdd.solicitado,
                'categoria': livroAdd.categoria
            });
            this.setState({ minhaLista: [...this.state.minhaLista] })
        } else {
            alert('Já possui livro adicionado')
        }
    }

    deleteLivro(key) {
        const del = this.state.minhaLista.filter(item => item.id !== key)
        this.setState({ minhaLista: del })
    }


    render() {

        var addBotao
        const { navigation } = this.props;
        const livroAdd = navigation.getParam('addLivro');
        if (livroAdd == null) {
            addBotao = require('../img/back15.png')
        } else {
            addBotao = require('../img/back16.png')
        }

        return (


            <ImageBackground style={styles.container} source={require('../img/back7.png')} resizeMode={'stretch'}>

                <View style={styles.header}>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { this.props.navigation.navigate('Home') }}>

                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back4.png')}
                        />

                    </TouchableOpacity>

                    <Text style={styles.titulo}>Minha Lista</Text>

                    <TouchableOpacity style={styles.btnAdd} onPress={this.addLivro.bind(this)}>

                        <Image
                            style={{ width: 45, height: 45, opacity: 0.7 }}
                            source={addBotao} // muda com ifs
                        />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { this.props.navigation.navigate('Pesquisa') }}>

                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back12.png')}
                        />

                    </TouchableOpacity>

                </View>

                <View style={styles.listaArea} key={this.props.keyval}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.minhaLista}
                        extraData={this.state.minhaLista}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <FeedLista
                                data={item}
                                id={item.id}
                                func={this.deleteLivro.bind(this)}
                            />}
                    />
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
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titulo: {
        color: '#053B70',
        fontSize: 25,
        fontFamily: 'Ubuntu-Bold',
        marginLeft: 40,
        textAlign: 'center'
    },
    btnOp: {
        marginLeft: 10,
        marginRight: 20,
    },
    btnAdd: {
        marginLeft: 40,
        marginRight: 10,
    },
    listaArea: {
        width: '95%',
        height: '84%',
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 10
    },


})

