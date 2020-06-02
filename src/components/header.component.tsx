import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PRIMARY_COLOR, BG_WHITE } from '../constants/color.constants';

function Header() {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >
                Hotels
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: BG_WHITE,
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Header;