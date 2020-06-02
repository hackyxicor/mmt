import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

import Header from './src/components/header.component';
import SortTypes from './src/components/sort-types.component';
import { FetchHotels } from './src/utils/api.utils';
import HotelCard from './src/components/hotel-card.component';
import { SORT_TYPES } from './src/constants/common.constants';
import { Hotel } from './src/constants/interface.constants';
import { SortResutsBy } from './src/utils/common.utils';
import { PRIMARY_COLOR } from './src/constants/color.constants';

//Approach -

/**
 * A. Maintaining Dictionary of hotels 
 * {
 *  1: { ... hotel data },
 *  2: { ... }
 * }
 * 
 * B. Sorted results are stored in memory in sortedResults by id 
 * sortedResults {
 *  default: [1,2,3,4,5,6...],
 *  price: [6,1,2,5,...]
 * }
 * 
 * thus if user repeat any operation in that case stored result is displayed
 */

export default function App() {
    const [loading, setLoading] = useState(false);
    const [sortedResults, setSortedResults] = useState<{ [key: string]: Array<number> }>({});
    const [dictionary, setDictionary] = useState<{ [key: number]: Hotel }>({})
    const [sortBy, setSortBy] = useState<string>("default");
    const [desc, setDesc] = useState(true);

    useEffect(() => {
        getHotelsData();
    }, [])

    async function getHotelsData() {
        setLoading(true);
        const result = await FetchHotels();
        setLoading(false);
        setDictionary(result.dictionary);
        setSortedResults({
            default: result.default
        })
    }

    function sortNow(type: string) {
        switch (type) {
            case SORT_TYPES[0]:
                sortResultLocally(type, "starRating");
                break;
            case SORT_TYPES[1]:
                sortResultLocally(type, "price");
                break;
            case SORT_TYPES[2]:
                sortResultLocally(type, "roomsAvailable")
                break;
        }
    }

    function sortResultLocally(type: string, key: keyof Hotel) {
        if (sortBy == type) {
            setDesc(!desc);
        } else {
            setDesc(true);
        }


        if (!sortedResults[type]) {
            sortedResults[type] = SortResutsBy(dictionary, key);
        }

        setSortBy(type);
    }

    function getHoteslList() {
        let ids = sortedResults[sortBy] || [];
        if (!desc) {
            ids.reverse();
        }

        return [...ids.map((hotelId: number) => dictionary[hotelId])];
    }

    function EmptyListComponent() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <ActivityIndicator animating={loading} size="large" color={PRIMARY_COLOR} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container} >
            <Header />
            <SortTypes sortNow={sortNow} />
            <FlatList
                data={getHoteslList()}
                renderItem={HotelCard}
                ListEmptyComponent={EmptyListComponent}
                keyExtractor={(item) => String(item.id)}
                extraData={getHoteslList()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
