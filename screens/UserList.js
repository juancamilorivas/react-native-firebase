import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import firebase from "../database/firebase";
import { ListItem, Avatar } from "@rneui/themed";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];

      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => props.navigation.navigate("CreateUserScreen")}
      />
      {users.map((user) => {
        return (
          <ListItem key={user.id} bottomDivider onPress={() => {
            props.navigation.navigate('UserDetailScreen', {
            userId: user.id
            })
          }}>
            <ListItem.Chevron />
            <Avatar
              source={{
                uri: "https://randomuser.me/api/portraits/men/36.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
