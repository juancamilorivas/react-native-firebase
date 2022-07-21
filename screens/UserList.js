import React, { useState, useEffect } from "react";
import { Button, StyleSheet, ScrollView, View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";


import firebase from "../database/firebase";

const UserScreen = (props) => {
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
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Create User"
      />
      {users.map((user) => {
        return (
          <ListItem
          bottomDivider
            key={user.id}
            
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
            
          >
            <ListItem.Chevron />

            <Avatar
              source={{
                uri:
                  "https://user-images.githubusercontent.com/67404147/173031349-5454733d-1332-43f9-9740-6c2e5064c701.png",
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

export default UserScreen;