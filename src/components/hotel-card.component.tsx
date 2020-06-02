import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Hotel } from '../constants/interface.constants';
import { GREY_LIGHT, TEXT_COLOR } from '../constants/color.constants';

function HotelCard({ item: hotel }: { item: Hotel }) {
    return (
        <View style={styles.container} >
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={{ uri: hotel?.image }} style={styles.image} />
                </View>
                <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'center' }} >
                    <Text style={[styles.text, styles.bold]} >{hotel?.name}</Text>
                    <Text style={styles.text} >Rs. {hotel?.price}</Text>
                    <Text style={styles.text} >{hotel?.roomsAvailable} rooms available</Text>
                    <Text style={styles.text} >{hotel?.starRating} Stars</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderBottomColor: GREY_LIGHT,
        borderBottomWidth: 1,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    text: {
        color: TEXT_COLOR,
        fontSize: 14,
        paddingTop: 2,
        paddingBottom: 2,
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default HotelCard;