import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardMessage from "../components/CardMessage";

const CONTACTS = [
  { id: 1, name: "Marcos" },
  { id: 2, name: "Nator" },
  { id: 3, name: "Everton" },
  { id: 4, name: "Ana" },
];

export default function HomeScreen({ navigation: navigationProp }) {
  const hookNavigation = useNavigation();
  const navigation = navigationProp ?? hookNavigation;

  const handleOpenChat = (contact) => {
    navigation.navigate("Chat", {
      contactId: contact.id,
      contactName: contact.name,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Contacts</Text>
      <FlatList
        data={CONTACTS}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardMessage
            name={item.name}
            onPress={() => handleOpenChat(item)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4B5563",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  listContent: {
    paddingBottom: 24,
  },
});
