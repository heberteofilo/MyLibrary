import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';


export default class FeedLista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: this.props.data,
            delete: this.props.func, // delete func - MinhaLista

        };

    }

    render() {

        return (

            <View style={styles.container}>

                <TouchableOpacity onPress={() => { }}  >
                    <Image
                        style={{ width: 125, height: 175, marginTop: 25, marginLeft: 15, marginBottom: 10 }}
                        source={this.state.lista.capa}
                    />
                </TouchableOpacity>

                <View>
                    <Text style={styles.titulo}>Titulo: {this.state.lista.livro} </Text>
                    <Text style={styles.texto}>Autor(a): {this.state.lista.autor} </Text>
                    <Text style={styles.texto}>Status: {this.state.lista.disponibilidade} </Text>
                    <Text style={styles.texto}>Requisitado: {this.state.lista.solicitado}</Text>
                    <Text style={styles.texto}>Categoria: {this.state.lista.categoria}</Text>
                    <TouchableOpacity style={styles.btnRemove} onPress={() => this.state.delete(this.props.id)}/* deleta minha lista */ >
                        <Text style={styles.textoRemove}> Remover </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        marginLeft: 15,
        fontFamily: 'Ubuntu-Regular',
    },
    texto: {
        width: 195,
        flexWrap: 'wrap',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 15,
        fontFamily: 'Ubuntu-Regular',
    },
    btnRemove: {
        backgroundColor: '#053B70',
        borderRadius: 10,
        marginLeft: 10,
        width: 100,
        padding: 3,
        marginTop: 5
    },
    textoRemove: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center',
    },
})