import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import {getMetricMetaInfo, timeToString, getDailyReminderValue} from './../utils/helpers'
import {submitEntry, removeEntry} from './../utils/Api'
import {white, red, orange, blue, lightPurp, pink, purple} from './../utils/colors'
import {connect} from 'react-redux'
import {addEntry} from './../actions'
import DateHeader from './DataHeader'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import TextButton from './TextButton'

const initialState = {
  run: 0,
  bike: 0,
  swim: 0,
  sleep: 0,
  eat: 0,
}

const SubmitBtn = ({onPress}) => {
  return(
    <TouchableOpacity 
      onPress={onPress} 
      style={Platform.OS === 'ios'
        ? styles.iosSubmitBtn
        : styles.adroidSubmitBtn
      }
    >
      <Text style={styles.submitBtnText}>Submit</Text>
    </TouchableOpacity>
  )
}

function AddEntry(props, {alreadyLogged}) {
  const [state, setState] = useState(initialState)
  const metaInfo = getMetricMetaInfo()

  const increment = (metric) => {
    const {max, step} = getMetricMetaInfo(metric)
    
    setState(currentState => {
      const count = currentState[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }

  const decrement = (metric) => {
    setState(currentState => {
      const count = currentState[metric] - getMetricMetaInfo(metric).step
      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      }
    })
  }

  const slide = (metric, value) => {
    setState({
      ...state,
      [metric]: value
    })
  }

  const submit = () => {
    const key = timeToString()
    const entry = state
    
    props.dispatch(addEntry({
      [key]: entry
    }))
    setState(initialState)
    // navigate to home
    submitEntry({entry, key})
    // clear local notif
  }

  const reset = () => {
    const key = timeToString()
    const value = getDailyReminderValue()
    props.dispatch(addEntry({
      [key]: value
    }))

    removeEntry(key)
  }

  if(alreadyLogged) {
    return (
      <View style={styles.center}>
        <Ionicons
          name="ios-happy"
          size={100}
        />
        <Text>You already your information for today</Text>
        <TextButton onPress={reset} style={{padding: 10}}>
          Reset
        </TextButton>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <DateHeader date={(new Date()).toLocaleDateString()}/>
      <Text>{JSON.stringify(state)}</Text>
      {Object.keys(metaInfo).map(key => {
        const {getIcon, type, ...rest} = metaInfo[key]
        const value = state[key]

        return(
          <View key={key} style={styles.row}>
            {getIcon()}
            {type === 'slider'
              ? <UdaciSlider 
                  value={value} 
                  onChange={(value) => slide(key, value)} 
                  {...rest} 
                />
              : <UdaciSteppers 
                  value={value}
                  onIncrement={() => increment(key)}
                  onDecrement={() => decrement(key)}
                /> 
            }
          </View>
        )
      })}
      <SubmitBtn onPress={submit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  adroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
    height: 45,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
  }
})

function mapStateToProps(state) {
  const key = timeToString()
  return {
    alreadyLogged: state[key] && typeof state[key].today === 'undefined'
  }
}

export default connect(mapStateToProps)(AddEntry)