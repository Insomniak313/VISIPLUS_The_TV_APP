import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import {search} from "./src/api"
import {useEffect, useState} from "react"
import {Movie} from "./src/Movie"

export default function App() {
  const [searchTerm, setSearchTerm] = useState('matrix')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    search(searchTerm).then(({data}) => setMovies(data))
  }, [searchTerm])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The TV APP</Text>
      <Text style={styles.description}>Vous cherchez quelque chose ?</Text>
      <TextInput style={styles.input} value={searchTerm} onChangeText={(text) => setSearchTerm(text)}/>
      <ScrollView>
        <>{movies.map((data, i) => <Movie key={i} data={data}/>)}</>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#de6262',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal:10,
    paddingVertical:40
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#6262de',
  },
  description: {
    fontSize: 20,
    color: '#3e3c69',
    flexWrap: "wrap",
    paddingLeft: 15
  },
  input: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 50
  }
})
