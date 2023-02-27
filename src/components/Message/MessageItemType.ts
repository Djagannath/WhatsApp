export type MessageItemType = {
  text: string,
  createdAt: string,
  user: User
}

type User = {
  id: string,
  name: string
}
