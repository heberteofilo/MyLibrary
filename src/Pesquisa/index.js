import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, FlatList, Button
} from 'react-native';

import FeedPesquisa from '../PesquisaFeed';


export default class Pesquisa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedPesquisa: [
                {
                    id: 1,
                    autor: 'Lucinda Riley',
                    livro: 'A Sala Das Borboletas',
                    capa: require('../img/imgP/Livro1.png'),
                    disponibilidade: 'Disponível',
                    solicitado: 590,
                    reserva: '',
                    categoria: 'Romance',
                    descricao: 'Posy Montague está prestes a completar 70 anos. Ela ainda vive na Admiral House,' +
                        'a mansão da família onde passou uma infância idílica caçando borboletas com o pai e onde criou os próprios filhos.' +
                        'Porém, a casa está caindo aos pedaços e Posy sabe que chegou a hora de vendê-la. ' + '\n\n' +
                        'Em meio a essa angustiante decisão, ela precisa lidar com os dois filhos, tão diferentes entre si.' +
                        'Sam é um fracasso nos negócios e, a cada empresa falida, se torna um homem mais amargo. Já Nick, o mais novo,' +
                        'retorna de repente à Inglaterra depois de dez anos morando na Austrália, fugido de uma decepção amorosa.' + '\n\n' +
                        'Para completar, Posy reencontra Freddie, seu primeiro amor, que agora deseja explicar por que a abandonou cinquenta anos atrás.' +
                        'Ela reluta em acreditar nessa súbita afeição, percebendo que ele tem um segredo devastador para revelar.'
                },
                {
                    id: 2,
                    autor: 'Nikolas Sparks',
                    livro: 'A Última Música',
                    capa: require('../img/imgP/Livro2.png'),
                    disponibilidade: 'Indisponível',
                    solicitado: 1020,
                    reserva: '',
                    categoria: 'Drama',
                    descricao: 'Uma das lembranças mais felizes de Ronnie era se sentar ao lado do pai ao piano e tocar por horas. Porém,' +
                        'desde que ele se separou da mãe dela e se mudou de Nova York, a menina só consegue olhar para o instrumento com raiva e mágoa.' + '\n\n' +
                        'Três anos após o divórcio, Ronnie mal tem contato com ele e a mãe acha que já está na hora de os dois reconstruírem os laços, passando juntos as férias de verão.' + '\n\n' +
                        'Antes um pianista que sempre estava viajando, o pai agora leva uma vida tranquila numa pequena cidade litorânea,' +
                        'imerso no trabalho de reconstrução do vitral de uma igreja, destruído em um incêndio misterioso.'
                },
                {
                    id: 3,
                    autor: 'Ruta Sepetys',
                    livro: 'O Sal Das Lágrimas',
                    capa: require('../img/imgP/Livro3.png'),
                    disponibilidade: 'Disponível',
                    solicitado: 190,
                    reserva: '',
                    categoria: 'Drama',
                    descricao: 'Uma das lembranças mais felizes de Ronnie era se sentar ao lado do pai ao piano e tocar por horas. Porém,' +
                        'desde que ele se separou da mãe dela e se mudou de Nova York, a menina só consegue olhar para o instrumento com raiva e mágoa.' + '\n\n' +
                        'Três anos após o divórcio, Ronnie mal tem contato com ele e a mãe acha que já está na hora de os dois reconstruírem os laços, passando juntos as férias de verão.' + '\n\n' +
                        'Antes um pianista que sempre estava viajando, o pai agora leva uma vida tranquila numa pequena cidade litorânea,' +
                        'imerso no trabalho de reconstrução do vitral de uma igreja, destruído em um incêndio misterioso.'
                },
                {
                    id: 4,
                    autor: 'Eloisa James',
                    livro: 'A Torre Do Amor',
                    capa: require('../img/imgP/Livro4.png'),
                    disponibilidade: 'Disponível',
                    solicitado: 290,
                    reserva: '',
                    categoria: 'Romance',
                    descricao: 'Uma das lembranças mais felizes de Ronnie era se sentar ao lado do pai ao piano e tocar por horas. Porém,' +
                        'desde que ele se separou da mãe dela e se mudou de Nova York, a menina só consegue olhar para o instrumento com raiva e mágoa.' + '\n\n' +
                        'Três anos após o divórcio, Ronnie mal tem contato com ele e a mãe acha que já está na hora de os dois reconstruírem os laços, passando juntos as férias de verão.' + '\n\n' +
                        'Antes um pianista que sempre estava viajando, o pai agora leva uma vida tranquila numa pequena cidade litorânea,' +
                        'imerso no trabalho de reconstrução do vitral de uma igreja, destruído em um incêndio misterioso.'
                },
                {
                    id: 5,
                    autor: 'M. A. Bennett',
                    livro: 'A Caça',
                    capa: require('../img/imgP/Livro5.png'),
                    disponibilidade: 'Indisponível',
                    solicitado: 5590,
                    reserva: '',
                    categoria: 'Ação',
                    descricao: 'Uma das lembranças mais felizes de Ronnie era se sentar ao lado do pai ao piano e tocar por horas. Porém,' +
                        'desde que ele se separou da mãe dela e se mudou de Nova York, a menina só consegue olhar para o instrumento com raiva e mágoa.' + '\n\n' +
                        'Três anos após o divórcio, Ronnie mal tem contato com ele e a mãe acha que já está na hora de os dois reconstruírem os laços, passando juntos as férias de verão.' + '\n\n' +
                        'Antes um pianista que sempre estava viajando, o pai agora leva uma vida tranquila numa pequena cidade litorânea,' +
                        'imerso no trabalho de reconstrução do vitral de uma igreja, destruído em um incêndio misterioso.'
                },
                {
                    id: 6,
                    autor: 'Michael Crichton',
                    livro: 'Dentes De Dragão',
                    capa: require('../img/imgP/Livro6.png'),
                    disponibilidade: 'Disponível',
                    solicitado: 10590,
                    reserva: '',
                    categoria: 'Aventura',
                    descricao: 'Uma das lembranças mais felizes de Ronnie era se sentar ao lado do pai ao piano e tocar por horas. Porém,' +
                        'desde que ele se separou da mãe dela e se mudou de Nova York, a menina só consegue olhar para o instrumento com raiva e mágoa.' + '\n\n' +
                        'Três anos após o divórcio, Ronnie mal tem contato com ele e a mãe acha que já está na hora de os dois reconstruírem os laços, passando juntos as férias de verão.' + '\n\n' +
                        'Antes um pianista que sempre estava viajando, o pai agora leva uma vida tranquila numa pequena cidade litorânea,' +
                        'imerso no trabalho de reconstrução do vitral de uma igreja, destruído em um incêndio misterioso.'
                },
                {
                    id: 7,
                    autor: 'Nicolas Sparks',
                    livro: 'O Casamento',
                    capa: require('../img/imgP/Livro7.png'),
                    disponibilidade: 'Disponível',
                    solicitado: 353,
                    reserva: '',
                    categoria: 'Romance',
                    descricao: 'Uma das lembranças mais felizes de Ronnie era se sentar ao lado do pai ao piano e tocar por horas. Porém,' +
                        'desde que ele se separou da mãe dela e se mudou de Nova York, a menina só consegue olhar para o instrumento com raiva e mágoa.' + '\n\n' +
                        'Três anos após o divórcio, Ronnie mal tem contato com ele e a mãe acha que já está na hora de os dois reconstruírem os laços, passando juntos as férias de verão.' + '\n\n' +
                        'Antes um pianista que sempre estava viajando, o pai agora leva uma vida tranquila numa pequena cidade litorânea,' +
                        'imerso no trabalho de reconstrução do vitral de uma igreja, destruído em um incêndio misterioso.'
                },
            ]
        };
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../img/back7.png')} resizeMode={'stretch'}>

                <View style={styles.header}>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { this.props.navigation.goBack() }}>
                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back4.png')}
                        />
                    </TouchableOpacity>

                    <Text style={styles.titulo}>Pesquisa Acervo</Text>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { }}>
                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back6.png')}
                        />
                    </TouchableOpacity>

                </View>

                <View style={styles.pesquisaArea}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.feedPesquisa}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <FeedPesquisa data={item} navigation={this.props.navigation} /* Passando Navigator */ />}
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
    pesquisaArea: {
        width: '93%',
        height: '85%',
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        marginTop: 15,
        borderRadius: 10
    },
})

