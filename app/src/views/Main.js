import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Main extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>O Desconectado</Text>
            </View>
        )
    }
}

export default Main

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})