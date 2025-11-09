import type { IChat } from "@/src/shared/types/chat.interface";

interface Props {
  chat: IChat;
}
export function Chat({ chat }: Props) {
  return (
    <div>
      <p>{chat.text}</p>
      <span>@{chat.author}</span>
    </div>
  );
}
