import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import firebase from "../database/firebase";

const UserDetailScreen = (props) => {

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
}

  const [user, setUser] = useState(initialState);

  const [loading, setLoading] = useState(true);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({
      ...user,
      id: doc.id,
    });
    setLoading(false);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const deleteUser = async () => {
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("UserList");
  };

const upDateUser = async () => {
  const dbRef = firebase.db.collection('users').doc(user.id)
  await dbRef.set({
    name: user.name,
    email: user.email,
    phone: user.phone,
  })
  setUser(initialState)
  props.navigation.navigate('UserList')
}

  const openConfirmationAlert = () => {
    Alert.alert("Remove the user", "Are you sure?", [
      { text: "yes", onPress: () => deleteUser() },
      { text: "no", onPress: () => console.log(false) },
    ]);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name user"
          onChangeText={(value) => handleChangeText("name", value)}
          value={user.name}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email user"
          onChangeText={(value) => handleChangeText("email", value)}
          value={user.email}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone user"
          onChangeText={(value) => handleChangeText("phone", value)}
          value={user.phone}
        />
      </View>
      <View>
        <Button
          color="#19ac52"
          title="Update user"
          onPress={() => upDateUser()}
        />
      </View>
      <View>
        <Button
          color="#e37E99"
          title="Delete user"
          onPress={() => openConfirmationAlert()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default UserDetailScreen;
