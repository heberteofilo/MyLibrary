import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, FlatList, Button
} from 'react-native';

import FeedReserva from './FeedReserva';


export default class MinhaReserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minhaReserva: [
                {
                    id: 3,
                    autor: 'Ruta Sepetys',
                    livro: 'O Sal Das Lágrimas',
                    capa: require('../img/imgP/Livro3.png'),
                    disponibilidade: 'Disponível',
                    solicitado: 190,
                    reserva: 'Até 22/3/2020',
                    categoria: 'Drama',
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
        const teste = this.state.minhaReserva.filter((e) => e.id === livroId)

        if (teste[0] === undefined) {

            var d = new Date();

            this.state.minhaReserva.push({
                'id': livroAdd.id,
                'autor': livroAdd.autor,
                'livro': livroAdd.livro,
                'capa': livroAdd.capa,
                'disponibilidade': livroAdd.disponibilidade,
                'solicitado': livroAdd.solicitado,
                'reserva': 'Até ' + (d.getDate() + 2) +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getFullYear(),
                'categoria': livroAdd.categoria,
            });


            this.setState({ minhaReserva: this.state.minhaReserva })
        } else {
            alert('Já possui livro adicionado')
        }
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

                    <Text style={styles.titulo}>Minhas Reservas</Text>

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
                        data={this.state.minhaReserva}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <FeedReserva
                                dataR={item}
                                id={item.id}
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
        justifyContent: 'space-around',
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
    listaArea: {
        width: '95%',
        height: '84%',
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 10
    },
    btnAdd: {
        marginLeft: 15,
        marginRight: 10,
    },
})