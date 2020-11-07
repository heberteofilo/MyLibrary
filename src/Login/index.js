import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Picker,
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet,
    Button,
} from 'react-native';

import * as Font from 'expo-font';

export default class Login extends Component {
    static navigationOptions = {

    };
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            matricula: null,
            senha: null,
            perfil: null,
            picker: [
                { id: '1', nome: 'Funcionário' },
                { id: '2', nome: 'Aluno' }
            ],

        };

        this.enviarDados = this.enviarDados.bind(this)

    }

    async componentDidMount() {
        await Font.loadAsync({
            'Ubuntu-Bold': require('../../assets/fonts/Ubuntu-Bold.ttf'),
            'Ubuntu-Regular': require('../../assets/fonts/Ubuntu-Regular.ttf')
        });
        this.setState({ fontLoaded: true });
    }


    enviarDados() {
        if (this.state.matricula === '' || this.state.senha === '' || this.state.perfil === '') {
            alert('Peencha os dados corretamente!')
            return;
        }

    }

    render() {

        let itemsPicker = this.state.picker.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />
        })

        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log('dismissed keyboard')
            }}>
                <ImageBackground source={require('../img/back1.png')} style={styles.container}>

                    {
                        this.state.fontLoaded ? (
                            <Text style={styles.titulo}>Biblioteca SENAC</Text>
                        ) : null
                    }
                    <Image
                        source={require('../img/logoSenac.png')}
                        style={styles.img}
                    />
                    <View style={styles.container2}>
                        {
                            this.state.fontLoaded ? (
                                <Text style={styles.texto}>Matrí­cula</Text>
                            ) : null
                        }
                        {
                            this.state.fontLoaded ? (
                                <TextInput style={styles.input}
                                    placeholder={'Sua Matrícula'}
                                    onChangeText={texto => this.setState({ matricula: texto })}
                                />
                            ) : null
                        }
                        {
                            this.state.fontLoaded ? (
                                <Text style={styles.texto}>Senha</Text>
                            ) : null
                        }
                        {
                            this.state.fontLoaded ? (
                                <TextInput style={styles.input}
                                    placeholder={'Sua senha'}
                                    secureTextEntry={true}
                                    passwordRules={true}
                                    onChangeText={texto => this.setState({ senha: texto })}
                                />
                            ) : null
                        }
                        <View style={styles.picker}>
                            <Picker
                                selectedValue={this.state.perfil}
                                onValueChange={(itemValue, itemIndex) => this.setState({ perfil: itemValue })}
                            >
                                <Picker.Item value={''} key={'0'} label={'Selecione seu perfil'} color={'gray'} />
                                {itemsPicker}
                            </Picker>
                        </View>

                        <TouchableOpacity style={styles.btnOp} onPress={() => {
                            this.props.navigation.navigate('Home', { 'matricula': this.state.matricula })
                        }}>
                            {
                                this.state.fontLoaded ? (
                                    <Text style={styles.btnTexto}>ENTRAR</Text>
                                ) : null
                            }
                        </TouchableOpacity>

                    </View>


                </ImageBackground>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#053B69'
    },
    container2: {
        width: 320,
        height: 310,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    titulo: {
        color: '#053F99',
        fontSize: 25,
        fontFamily: '',
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Ubuntu-Bold'
    },
    texto: {
        fontSize: 20,
        opacity: 0.8,
        marginTop: 15,
        marginLeft: 30,
        fontFamily: 'Ubuntu-Regular'
    },
    input: {
        fontSize: 17,
        borderBottomWidth: 2,
        borderBottomColor: '#053B99',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        fontFamily: 'Ubuntu-Regular'
    },
    picker: {
        marginLeft: 70,
        marginRight: 70,
        marginBottom: 10,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10
    },
    btnOp: {
        backgroundColor: '#053B70',
        marginLeft: 63,
        marginTop: 10,
        height: 50,
        width: 200,
        borderRadius: 10
    },
    btnTexto: {
        fontSize: 17,
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 15
    },
    img: {
        width: 250,
        height: 150,
    },

})