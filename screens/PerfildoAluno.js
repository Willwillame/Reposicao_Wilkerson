import React, {useEffect, useState} from "react";
import {Text,View, Image, StyleSheet} from "react-native";

export default function PerfildoAluno({navigation}){
    const [PerfildoAluno, setPerfildoAluno] = useState([]);
  
    useEffect(function(){
      async function getData(){
        const response = await fetch('https://mobile.ect.ufrn.br:3004/alunos');
        const PerfildoAlunoServer = await response.json();
        setPerfildoAluno(PerfildoAlunoServer)
      }
      getData();
    }, [])

    return(
        <View>Olá </View>
      )

const styles = StyleSheet.create({
    fotoMae:{
        width:70,
        height:70,
        borderRadius:35,
    },
})
