import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Balls from './Balls';

const List = (props) => {

    return (
        <View style={styles.container}>
          {props && props.numSorte.map(i=><Balls key={[i]} label={[i]} color={props.color}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
})

export default List;