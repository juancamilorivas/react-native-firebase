import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import firebase from '../database/firebase'

const UserList = () => {
  
const [users, setUsers] = useState([])

  return (
    <View>
      <Text>UserList</Text>
    </View>
  )
}

export default UserList