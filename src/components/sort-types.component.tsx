import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { BG_WHITE, GREY_LIGHT } from "../constants/color.constants";
import { SORT_TYPES } from "../constants/common.constants";


function SortTypes({ sortNow }: { sortNow: Function }) {
    return (
        <View style={styles.container} >
            {
                SORT_TYPES.map((type, key) => (
                    <TouchableOpacity
                        key={key}
                        style={styles.button}
                        onPress={() => sortNow(type)}
                    >
                        <Text>{type}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default SortTypes;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: BG_WHITE,
        flexDirection: 'row',
        borderBottomColor: GREY_LIGHT,
        borderBottomWidth: 1,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    underline: {
        textDecorationStyle: 'dashed'
    }
})