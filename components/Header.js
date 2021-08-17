import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: "Shopping List",
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
});

export default Header;
