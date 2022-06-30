import React,{useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const Balls = (props) => {
    const {label, color} = props;
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
            key = {label}
            >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bntAdd: {
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        boxSizing: "border-box",
        borderRadius: 30,
    },
    text: {
        fontSize: 25,
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

export default Balls;