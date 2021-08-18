import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  StatusBar,
} from "react-native";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: "Milk",
    },
    {
      id: uuidv4(),
      text: "Eggs",
    },
    {
      id: uuidv4(),
      text: "Bread",
    },
    {
      id: uuidv4(),
      text: "juice",
    },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const itemAdd = (text) => {
    if (text) {
      console.log(text);
      Alert.alert("Error", "Please enter a valid task", [
        {
          text: "Ok",
        },
      ]);
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text: text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style={styles.status} />
      <Header title="Task Manager" />
      <AddItem itemAdd={itemAdd} />
      <Text style={styles.text}>Your Tasks</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};


// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
