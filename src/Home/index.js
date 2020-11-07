import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, FlatList
} from 'react-native';

import MinhaLista from '../MinhaLista';

export default class Home extends Component {
    static navigationOptions = {

    };

    constructor(props) {
        super(props);
        this.state = {
            usuario: (this.props.navigation.getParam('matricula')) ? this.props.navigation.getParam('matricula') : 'Testador',
            meusLivros: 1,
            meusPedidos: 1,
            feed: [
                { id: 1, descricao: 'Ultimo dia' },
                { id: 2, descricao: 'Atraso de devolução' },
                { id: 3, descricao: 'Proximo da fila' },
                { id: 4, descricao: 'Parabéns, hoje é seu aniversário' },
                { id: 5, descricao: 'Ultimo dia' },
                { id: 6, descricao: 'Atraso de devolução' },
                { id: 7, descricao: 'Proximo da fila' },
                { id: 8, descricao: 'Ultimo dia' },
                { id: 9, descricao: 'Proximo da fila' },
                { id: 10, descricao: 'Ultimo dia' },
                { id: 11, descricao: 'Atraso de devolução' },
                { id: 12, descricao: 'Proximo da fila' },
                { id: 13, descricao: 'Ultimo dia' },
                { id: 14, descricao: 'Proximo da fila' },
            ]

        };
        
    }

    render() {
        // const { navigation } = this.props;
        // const Usuario = navigation.getParam('matricula');


        return (

            <ImageBackground style={styles.container} source={require('../img/back7.png')} resizeMode={'stretch'}>

                <View style={styles.header}>

                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => { this.props.navigation.navigate('Pesquisa') }}>
                        <Image
                            style={{ width: 45, height: 45, opacity: 0.8 }}
                            source={require('../img/back12.png')}
                        />
                    </TouchableOpacity>

                    <Text style={styles.titulo}>Home</Text>

                    <TouchableOpacity style={styles.btnOp} onPress={() => { this.props.navigation.navigate('Login') }}>
                        <Image
                            style={{ width: 40, height: 40, opacity: 0.8 }}
                            source={require('../img/back11.png')}
                        />
                    </TouchableOpacity>
                </View>

                <ImageBackground style={styles.container2} source={require('../img/back7.png')} resizeMode={'stretch'}>

                    <View style={styles.container3}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.nTexto}>{this.state.meusLivros}</Text>
                            <Image
                                style={{ width: 50, height: 50, opacity: 0.7, marginTop: 7, marginRight: 20 }}
                                source={require('../img/back9.png')}
                            />
                        </View>

                        <Text style={styles.texto}>Minha lista</Text>

                        <TouchableOpacity style={styles.btnOp2} onPress={() => this.props.navigation.navigate('MinhaLista')} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image
                                    source={require('../img/back5.png')}
                                    style={{ width: 30, height: 30, marginLeft: 7, marginTop: 7, opacity: 0.5 }}
                                />
                                <Text style={styles.btnTexto2}>
                                    Detalhes
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                    <View style={styles.container3}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.nTexto}>{this.state.meusPedidos}</Text>
                            <Image
                                style={{ width: 43, height: 43, opacity: 0.7, marginTop: 10, marginRight: 20, marginBottom: 4 }}
                                source={require('../img/back10.png')}
                            />
                        </View>

                        <Text style={styles.texto}>Minhas reservas</Text>

                        <TouchableOpacity style={styles.btnOp2} onPress={() => this.props.navigation.navigate('MinhaReserva')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image
                                    source={require('../img/back5.png')}
                                    style={{ width: 30, height: 30, marginLeft: 7, marginTop: 7, opacity: 0.5 }}
                                />
                                <Text style={styles.btnTexto2}>
                                    Detalhes
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>



                <View style={styles.feedBack}>
                    <Text style={styles.textoFeed}>Feedback</Text>

                    <FlatList style={{ borderTopWidth: 2, borderTopColor: '#7F7F7F7F', marginLeft: 15, marginRight: 15 }}
                        data={this.state.feed}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Feed data={item} />}
                        showsVerticalScrollIndicator={false}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#AAAAAAAA',
        justifyContent: 'space-around'
    },
    container3: {
        width: 160,
        height: 140,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#F7F7F7F7',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    feedBack: {
        width: 320,
        height: 360,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10
    },
    titulo: {
        color: '#053B70',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 15,
        marginLeft: 60,
        fontFamily: 'Ubuntu-Bold'
    },
    nTexto: {
        fontSize: 30,
        color: '#7F7F7F',
        marginTop: 10,
        marginLeft: 15,
        fontFamily: 'Ubuntu-Regular'
    },
    texto: {
        fontSize: 17,
        color: '#7F7F7F',
        marginTop: 5,
        marginLeft: 10,
        fontFamily: 'Ubuntu-Regular'
    },
    textoFeed: {
        fontSize: 20,
        color: '#7F7F7F',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Ubuntu-Regular'
    },
    btnOp: {
        marginLeft: 70,
        marginTop: 13,
        marginRight: 10,
    },
    btnTexto: {
        fontSize: 17,
        textAlign: 'center',
        color: '#053B70',
        marginTop: 10,
        fontFamily: 'Ubuntu-Bold'
    },
    btnOp2: {
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        height: 40,
        width: '100%',
        borderTopWidth: 2.5,
        borderTopColor: '#DDD',
        marginRight: 10
    },
    btnTexto2: {
        fontSize: 17,
        marginRight: 35,
        color: '#7F7F7F',
        marginTop: 12,
        marginLeft: 5,
        fontFamily: 'Ubuntu-Bold',
    },
})

class Feed extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textoFeed} >{this.props.data.descricao}</Text>
            </View>
        );
    }
}