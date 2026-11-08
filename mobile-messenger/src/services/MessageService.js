import MessageRepository from "../repositories/MessageRepository";

export default class MessageService {
  constructor(repository = new MessageRepository()) {
    this.repository = repository;
    this.nextId = 5;
  }

  getMessages(contactId) {
    return this.repository.getMessages(contactId);
  }

  sendMessage(contactId, text) {
    if (typeof text !== "string") {
      return null;
    }

    const trimmedText = text.trim();
    if (!trimmedText) {
      return null;
    }

    const newMessage = {
      id: this.nextId++,
      contactId,
      text: trimmedText,
      received: false,
    };

    return this.repository.addMessage(newMessage);
  }
}

export const messageService = new MessageService();
