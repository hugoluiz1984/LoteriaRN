import React,{useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const List = (props) => {
    const {label, onPress , color} = props;
    const [cores, setCores] = useState(null)
    
    useEffect(() => {
        switch (color) {
            case 'green':
                setCores(styles.green)
                break;
        
            default:
                setCores(styles.yellow)
                break;
        }
    }, []);
    

    return (
        <TouchableOpacity 
            style={[styles.bntAdd, cores]}
            onPress={onPress}
            >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bntAdd: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        boxSizing: "border-box",
        borderRadius: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",
    },
    green:{
        backgroundColor: '#008000',
    },
    yellow:{
        backgroundColor: '#00FF00'
    }
})

export default List;