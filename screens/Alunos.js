import React, {useEffect, useState} from "react";
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from "react-native";

export default function Alunos({navigation}){
  const [Alunos, setAlunos] = useState([]);

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://mobile.ect.ufrn.br:3004/alunos');
      const AlunosServidor = await response.json();
      console.log(AlunosServidor);
      setAlunos(AlunosServidor)
    }
    getData();
  }, [])

  function renderItem({ item }){
    return <TouchableOpacity style={styles.perfil} onPress={() => navigation.navigate('PerfildoAluno', {idAluno:item})}>
      <Image style={styles.fotoAluno} source={{ uri: item.foto}}/>
      <Text style={styles.nomeAluno}>{item.nome}</Text>
    </TouchableOpacity>
  }

  return(
    <View>
      <FlatList
        data={Alunos}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
        showsVerticalScrollIndicator = {true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  perfil: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    padding:20,

  },
  fotoAluno:{
    width:70,
    height:70,
    borderRadius:35,
  },
  nomeAluno:{
    marginLeft:10,
  }
})