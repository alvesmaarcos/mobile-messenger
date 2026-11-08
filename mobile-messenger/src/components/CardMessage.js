import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function CardMessage({ name, onPress }) {
  const initial = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>Tap to open conversation</Text>
      </View>

      <View style={styles.actionButton}>
        <Text style={styles.actionText}>Chat</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    marginVertical: 6,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  containerPressed: {
    backgroundColor: "#F0FDF4",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#128C7E",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  actionButton: {
    backgroundColor: "#25D366",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  actionText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
