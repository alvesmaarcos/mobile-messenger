import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Message({ message, received }) {
  return (
    <View
      style={[
        styles.bubble,
        received ? styles.receivedBubble : styles.sentBubble,
      ]}
    >
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "78%",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  receivedBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 4,
  },
  sentBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    borderTopRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    color: "#1F2937",
    lineHeight: 22,
  },
});
