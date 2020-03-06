import React from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import getActors from '../../data/actors'

const Actor = ({name, age, city, dob, photo}) => (
  <View>
    <Image source={{uri: photo}} />
    <Text>{name}</Text>
    <Text>{age}</Text>
    <Text>{city}</Text>
    <Text>{dob}</Text>
  </View>
)

export default function List() {
  const actors = getActors()

  const renderItem = ({item}) => {
    
  }

  return(
    <View>
      <FlatList
        data={actors}
        renderItem={({item}) => <Actor {...item} />}
        keyExtractor={item => item.dob}
      />
    </View>
  )
}