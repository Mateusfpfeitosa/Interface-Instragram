import React, { useState } from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './src/Header';
import List from './src/List';

export default function App() {

  const [feed,setFeed] = useState([

    {
      id: '1', 
      nome: 'Lucas Silva', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
      likeada: true, 
      likers: 1
    },
    {
      id: '2', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: true, 
      likers: 32
    }

  ])



  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.id}
        data={feed}
        renderItem={ ({item}) =>  <List data={item} />  }
      />


    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
