import {Image, StyleSheet, Text, View} from "react-native"

function sanitizeHtml(data) {
  if (!data) {
    return ''
  }
  const regex = /(<([^>]+)>)/ig
  return data.replace(regex, '')
}

export const Movie = ({data}) => (
  <View style={styles.container}>
    {data?.show?.image?.medium && (
      <Image style={styles.image} source={{uri: data?.show?.image?.medium ?? '#'}}/>
    )}
    <Text style={styles.title}>{data?.show?.name ?? ''}</Text>
    <Text style={styles.description}>{sanitizeHtml(data?.show?.summary)}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffb88c',
    flexDirection: "column",
    alignItems: 'stretch',
    padding: 20,
    marginVertical: 10
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    color: '#6262de',
    padding: 20,
    paddingBottom:0
  },
  description: {
    fontSize: 15,
    color: '#3e3c69',
    flexWrap: "wrap",
    padding: 20
  }
})
