import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';



export default class FeedPesquisa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data,
            modalVisible: false,

        };

    }

    ModalControl(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {

        return (
            <View style={styles.container}>

                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    transparent={true}
                    onRequestClose={() => { console.log('closed') }}
                >
                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={styles.modalView}>

                            <TouchableOpacity onPress={() => { this.ModalControl(!this.state.modalVisible) }}
                                style={styles.modelBtn}>

                                <Text style={styles.modalTitulo}>Descrição</Text>

                                <Image
                                    style={styles.modelImage}
                                    source={require('../img/back2.png')}
                                />
                            </TouchableOpacity>

                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Text style={styles.modalDescricao}>{this.state.feed.descricao}</Text>
                            </ScrollView>

                        </View>

                    </View>

                </Modal>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemPesquisa', { 'livro': this.state.feed })}>
                    <Image
                        style={{ width: 125, height: 175, marginTop: 25, marginLeft: 15, marginBottom: 10 }}
                        source={this.state.feed.capa}
                    />
                </TouchableOpacity>

                <View >
                    <TouchableOpacity onPress={() => { this.ModalControl(!this.state.modalVisible) }}>
                        <Text style={styles.titulo}>Titulo: {this.state.feed.livro} </Text>
                    </TouchableOpacity>
                    <Text style={styles.texto}>Autor(a): {this.state.feed.autor} </Text>
                    <Text style={styles.texto}>Status: {this.state.feed.disponibilidade} </Text>
                    <Text style={styles.texto}>Requisitado: {this.state.feed.solicitado}</Text>
                    <Text style={styles.texto}>Categoria: {this.state.feed.categoria}</Text>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    titulo: {
        width: 195,
        flexWrap: 'wrap',
        fontSize: 15,
        marginTop: 25,
        marginLeft: 5,
        fontFamily: 'Ubuntu-Bold',
    },
    texto: {
        width: 195,
        flexWrap: 'wrap',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 5,
        fontFamily: 'Ubuntu-Regular',
    },
    modalView: {
        height: 350,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    modalTitulo: {
        fontSize: 20,
        marginTop: 15,
        marginLeft: 135,
        fontFamily: 'Ubuntu-Regular',
        position: 'absolute'

    },
    modalDescricao: {
        width: 350,
        flexWrap: 'wrap',
        fontSize: 17,
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10,
        fontFamily: 'Ubuntu-Regular',

    },
    modelImage: {
        width: 40,
        height: 40,
        opacity: 0.8,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 300,
    },
    modelBtn: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#7F7F7F7F',
        paddingBottom: 5,
        paddingLeft: 15
    },
})