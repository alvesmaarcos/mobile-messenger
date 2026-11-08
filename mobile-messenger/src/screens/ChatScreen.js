import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Message from "../components/Message";
import { messageService } from "../services/MessageService";

export default function ChatScreen({ route: routeProp }) {
  const hookRoute = useRoute();
  const route = routeProp ?? hookRoute;
  const { contactId, contactName } = route?.params ?? {};

  const [messages, setMessages] = useState(() =>
    messageService.getMessages(contactId)
  );
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef(null);

  const isSendDisabled = inputText.trim().length === 0;

  const handleSend = () => {
    const createdMessage = messageService.sendMessage(contactId, inputText);
    if (!createdMessage) {
      return;
    }

    setMessages(messageService.getMessages(contactId));
    setInputText("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={90}
    >
      <View style={styles.contactBanner}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {contactName ? contactName.charAt(0).toUpperCase() : "?"}
          </Text>
        </View>
        <View>
          <Text style={styles.contactName}>{contactName}</Text>
          <Text style={styles.contactStatus}>Online</Text>
        </View>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Message message={item.text} received={item.received} />
        )}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      <View style={styles.inputBar}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          placeholderTextColor="#9CA3AF"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <Pressable
          onPress={handleSend}
          disabled={isSendDisabled}
          style={({ pressed }) => [
            styles.sendButton,
            isSendDisabled && styles.sendButtonDisabled,
            pressed && !isSendDisabled && styles.sendButtonPressed,
          ]}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
  },
  contactBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#128C7E",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  contactName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  contactStatus: {
    fontSize: 12,
    color: "#10B981",
  },
  messagesList: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#F0F2F5",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: "#111827",
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#075E54",
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonDisabled: {
    backgroundColor: "#9CA3AF",
  },
  sendButtonPressed: {
    backgroundColor: "#128C7E",
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
