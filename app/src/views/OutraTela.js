import React from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'
import { connect } from 'react-redux'

class OutraTela extends React.Component {

    render() {
    
        const { isConnect } = this.props

        return (
            <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Text>{isConnect ? 'Com': 'Sem'} Internet</Text>
                <Button title='Voltar'
                    onPress={() => this.props.navigation.navigate('Main')}
                />
                <Button title='Terceira Tela'
                    onPress={() => this.props.navigation.navigate('TerceiraTela')}
                />
            </View>
        )
    }
}

const mapStateToProps = store => {
    return {
        isConnect: store.mainReducer.isConnect
    }
}

export default connect(mapStateToProps)(OutraTela)