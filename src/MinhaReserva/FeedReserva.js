import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';


export default class FeedReserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaReserva: this.props.dataR,

        };

    }

    render() {

        return (

            <View style={styles.container}>

                <TouchableOpacity onPress={() => { }}  >
                    <Image
                        style={{ width: 125, height: 175, marginTop: 25, marginLeft: 15, marginBottom: 10 }}
                        source={this.state.listaReserva.capa}
                    />
                </TouchableOpacity>

                <View>
                    <Text style={styles.titulo}>Titulo: {this.state.listaReserva.livro} </Text>
                    <Text style={styles.texto}>Autor(a): {this.state.listaReserva.autor} </Text>
                    <Text style={styles.texto}>Status: {this.state.listaReserva.disponibilidade}</Text>
                    <Text style={styles.texto}>Requisitado: {this.state.listaReserva.solicitado}</Text>
                    <Text style={styles.texto}>Categoria: {this.state.listaReserva.categoria}</Text>
                    <Text style={styles.textoR}>Reserva: {this.state.listaReserva.reserva}</Text>
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
    textoR: {
        width: 195,
        flexWrap: 'wrap',
        fontSize: 15,
        marginTop: 7,
        marginLeft: 15,
        fontFamily: 'Ubuntu-Bold',
        color: '#053B70'
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