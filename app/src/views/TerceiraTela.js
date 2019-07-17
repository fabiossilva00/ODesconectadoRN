import React from 'react'
import {
    View,
    Button
} from 'react-native'
import { connect } from 'react-redux'

class TerceiraTela extends React.Component {

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Button title='Voltar'
                    onPress={() => this.props.navigation.navigate('OutraTela')}
                />
            </View>
        )
    }
}

const mapStateToProps = store =>  {
    return {
        isConnect: store.mainReducer.isConnect
    }
}

export default connect(mapStateToProps)(TerceiraTela)