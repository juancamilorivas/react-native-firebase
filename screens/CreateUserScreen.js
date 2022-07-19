import { View, Text, TextInput, ScrollView, Button } from 'react-native'
import React from 'react'

const CreateUserScreen = () => {
  return (
    <ScrollView>
      <View>
        <TextInput placeholder='Name user'/>
      </View>
      <View>
        <TextInput placeholder='Email user'/>
      </View>
      <View>
        <TextInput placeholder='Phone user'/>
      </View>
      <View>
        <Button title='Save user'/>
      </View>
    </ScrollView>
  )
}

export default CreateUserScreen