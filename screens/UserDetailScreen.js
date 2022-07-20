import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import firebase from '../database/firebase'

const UserDetailScreen = (props) => {

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection('users').doc(id)
      const doc = await dbRef.get()
      const user = doc.data()
      console.log(user)
  }

  useEffect(() => {
    getUserById(props.route.params.userId)
  })

  return (
    <View>
      <Text>UserDetailScreen</Text>
    </View>
  ) 
}

export default UserDetailScreen