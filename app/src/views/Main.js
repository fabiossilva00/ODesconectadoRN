import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NetInfo from '@react-native-community/netinfo'

import { existeInternet } from '../redux/reducers/mainReducer'

import { relatarProblemaAPI } from '../services/relatarProblemasRequest'

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        console.log(this.props)
        NetInfo.addEventListener(state => {
            this.props.existeInternet(state.isConnected)
        })
    }

    render() {
        const { isConnect } = this.props
        
        return (
            <View style={styles.container}>
                <Text>O Desconectado</Text>
                <Text>{isConnect ? 'Com' : 'Sem'} Internet</Text>
                <Button title='Relatar Problema'
                    style={styles.buttonStyle}
                    onPress={() => {
                        this.props.relatarProblemaAPI()
                    }}
                />

                <Button title='Outra Tela'
                    style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('OutraTela')}
                />
            </View>
        )
    }
}

const mapStateToProps = store => {
    return {
        isLoading: store.mainReducer.isLoading,
        isConnect: store.mainReducer.isConnect
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        relatarProblemaAPI,
        existeInternet
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    buttonStyle:{
        marginVertical: 35
    }
})