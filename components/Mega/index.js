import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Gerador} from '../../utils/Gerador';
import BntAdd from '../../utils/BntAdd';
import List from '../../utils/List';
import {Sorteio} from '../../utils/VerificaSorteio';

const Mega = (props) => {
    const {setScreen} = props;
    const [number, setNumber] = useState(6);
    const CAMINHO = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena'
    const [numSorte, setNumSort] = useState ([]);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const Gerar = () => {
        setNumSort(Gerador(number,60));
        console.log(numSorte,number);
      }
    
    function soma(){
        if (number<15) setNumber(number + 1)
    }
    function sub(){
        
        if (number>6)setNumber(number - 1)
    }
    const Results = async () =>{
            return fetch('https://reactnative.dev/movies.json')
              .then((response) => response.json())
              .then((json) => {
                return console.log(json);
              })
              .catch((error) => {
                console.error(error);
              });
          };
    
    
     useEffect(() => {

     }, []);

    return (
        <View>
          <Text>MEGA</Text> 
          <Button
            onPress={()=>setScreen('menu')}
            title="Voltar"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
          <Text>Gerador de Números</Text>
          <View style={styles.botoes}>
                <BntAdd label="-" onPress={()=>sub()} color='green'/>
                <Text style={styles.texto}>{number}</Text>

                <BntAdd label="+" onPress={()=>soma()} color='green'/>
          </View>
          
            <Button
            onPress={()=>Gerar()}
            title="Gerar"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
            <List numSorte={numSorte} color='green'/>
            <Button
            onPress={()=>Results()}
            title="Resultados"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
            <Text>{data&&data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,

      },
    botoes:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        margin:5,
    },
    texto:{
        fontSize:20,
        width:30,
        justifyContent: "center",
        alignItems: "center",
    }

})

export default Mega;
