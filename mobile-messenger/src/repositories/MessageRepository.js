export default class MessageRepository {
  constructor() {
    this.messages = [
      {
        id: 1,
        contactId: 1,
        text: "Hey! How is the mobile project going?",
        received: true,
      },
      {
        id: 2,
        contactId: 2,
        text: "Don't forget to test Stack Navigation and layers!",
        received: true,
      },
      {
        id: 3,
        contactId: 3,
        text: "Are we meeting at the lab today?",
        received: true,
      },
      {
        id: 4,
        contactId: 4,
        text: "Hi! Send me a message when you're ready.",
        received: true,
      },
    ];
  }

  getMessages(contactId) {
    return this.messages.filter((message) => message.contactId === contactId);
  }

  addMessage(message) {
    this.messages.push(message);
    return message;
  }
}
