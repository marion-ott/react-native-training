import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

export default function ImageComp() {
  return(
    <View>
      <Image
        style={styles.img}
        source={require('./../../assets/app.jpg')}
      />
      <View style={{ margin: 50 }}/>
      <Image style={styles.img} source={{uri: 'https://www.free4seniors.com/wp-content/uploads/2019/02/tyler-mcginnis-350x350_c.png'}}  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})