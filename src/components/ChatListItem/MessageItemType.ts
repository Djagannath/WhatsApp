import { User } from "./UserType";
import { Message } from "./MessageType";

export type MessageItem = { 
  id: string,
  user: User,
  lastMessage: Message
}