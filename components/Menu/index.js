import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Menu = (props) => {
    const {setScreen} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>LOTERIAS DA SORTE </Text>
            <Text>MENU</Text> 
            <Button
                onPress={()=>setScreen('mega')}
                title="MEGA SENA"
                color="#841584"
                accessibilityLabel="MENU"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    baseText: {
        fontFamily: "Cochin"
      },
      titleText: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center"
      }
});

export default Menu;
